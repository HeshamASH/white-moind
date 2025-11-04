// api/elastic-rag-search.ts
import { knowledgeBase } from './kb-data';
import { ElasticResult } from '../types';

export const config = {
  runtime: 'edge',
};

// This is a simplified mock search function. A real implementation would use the Elasticsearch client
// to perform a hybrid search (vector + keyword) against an actual index.
const searchKnowledgeBase = (query: string): ElasticResult[] => {
    const queryTerms = query.toLowerCase().split(/\s+/).filter(term => term.length > 2);
    const results: { [id: string]: { doc: (typeof knowledgeBase)[0], score: number, snippets: string[] } } = {};

    knowledgeBase.forEach(doc => {
        let docScore = 0;
        const matchedSnippets = new Set<string>();

        const contentLower = doc.content.toLowerCase();
        const titleLower = doc.title.toLowerCase();

        queryTerms.forEach(term => {
            if (titleLower.includes(term)) {
                docScore += 10; // Higher score for title matches
            }
            if (contentLower.includes(term)) {
                docScore += 1;
                // Find snippets
                const sentences = doc.content.split(/(?<=[.?!])\s+/);
                sentences.forEach(sentence => {
                    if(sentence.toLowerCase().includes(term)) {
                        matchedSnippets.add(sentence.trim());
                    }
                })
            }
        });
        
        if (docScore > 0) {
            results[doc.id] = { doc, score: docScore, snippets: Array.from(matchedSnippets) };
        }
    });
    
    // Sort by score and take top 3
    const sortedResults = Object.values(results).sort((a, b) => b.score - a.score).slice(0, 3);

    // Format for response
    return sortedResults.map(res => ({
        source: {
            fileName: res.doc.title,
            path: `KB/${res.doc.id}`,
        },
        contentSnippet: res.doc.content, // Return full content for viewer
        highlightSnippet: res.snippets.join('... '), // Join matched sentences for highlighting
        score: res.score,
    }));
};

export default async function handler(req: Request) {
    if (req.method !== 'POST') {
        return new Response('Method Not Allowed', { status: 405 });
    }

    try {
        const { query } = await req.json();
        if (!query) {
            return new Response(JSON.stringify({ message: 'Query is required.' }), { status: 400 });
        }

        const searchResults = searchKnowledgeBase(query);

        return new Response(JSON.stringify(searchResults), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error: any) {
        console.error('Error in RAG search proxy:', error);
        return new Response(JSON.stringify({ message: error.message || 'An internal server error occurred.' }), { status: 500 });
    }
}