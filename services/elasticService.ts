
// services/elasticService.ts
import { ElasticResult, Source } from '../types';
import { knowledgeBase } from './source-data';

const getDataset = (): ElasticResult[] => {
    return knowledgeBase.map(doc => ({
      source: {
        fileName: doc.title,
        path: doc.path,
      },
      contentSnippet: doc.content,
      score: 1.0,
    }));
}

export const createDatasetFromFileList = (fileList: FileList): Promise<ElasticResult[]> => {
  return new Promise((resolve, reject) => {
    const results: ElasticResult[] = [];
    let filesToProcess = fileList.length;

    if (filesToProcess === 0) {
      resolve([]);
      return;
    }

    Array.from(fileList).forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        results.push({
          source: {
            fileName: file.name,
            path: (file as any).webkitRelativePath || file.name,
          },
          contentSnippet: content,
          score: 1.0,
        });
        filesToProcess--;
        if (filesToProcess === 0) {
          resolve(results);
        }
      };
      reader.onerror = (error) => {
        console.error("Error reading file:", file.name, error);
        filesToProcess--;
        if (filesToProcess === 0) {
          resolve(results); 
        }
      };
      if (file.type.startsWith('text/') || file.type === 'application/json' || !file.type) {
        reader.readAsText(file);
      } else {
        console.warn(`Skipping non-text file: ${file.name} (${file.type})`);
        filesToProcess--;
        if (filesToProcess === 0) {
          resolve(results);
        }
      }
    });
  });
};

export const getFileContent = (source: Source): Promise<string | null> => {
    const doc = knowledgeBase.find(d => d.title === source.fileName && d.path === source.path);
    return Promise.resolve(doc ? doc.content.trim() : null);
};

export const getAllFiles = (customData?: ElasticResult[]): Promise<Source[]> => {
  const kbDataset = getDataset();
  const allData = [...kbDataset, ...(customData || [])];
  return Promise.resolve(allData.map(doc => doc.source));
};


// --- RAG Search Implementation ---

export const searchKnowledgeBase = (query: string): Promise<ElasticResult[]> => {
    if (!query.trim()) {
        return Promise.resolve([]);
    }

    const queryTerms = query.toLowerCase().split(/\s+/).filter(term => term.length > 2);
    const scoredResults: (ElasticResult & { score: number })[] = [];
    const MAX_RESULTS = 4;

    knowledgeBase.forEach(doc => {
        // Chunking by paragraph
        const chunks = doc.content.split(/\n\s*\n/).filter(p => p.trim().length > 10);

        chunks.forEach(chunk => {
            const lowerChunk = chunk.toLowerCase();
            let score = 0;

            queryTerms.forEach(term => {
                if (lowerChunk.includes(term)) {
                    score++;
                }
            });

            // Boost score for title match
            if (doc.title.toLowerCase().includes(query)) {
                score += 3;
            }

            if (score > 0) {
                scoredResults.push({
                    source: {
                        fileName: doc.title,
                        path: doc.path,
                    },
                    contentSnippet: doc.content, // full content for viewer
                    highlightSnippet: chunk,     // the relevant chunk for context
                    score,
                });
            }
        });
    });

    // Simple Reciprocal Rank Fusion (RRF) simulation by sorting and taking top results
    // A real RRF would combine multiple search algorithms. Here, we just use the score.
    const sortedResults = scoredResults.sort((a, b) => b.score - a.score);
    
    // Deduplicate results by source file, keeping the highest score for each.
    const uniqueResults: Record<string, ElasticResult> = {};
    for (const result of sortedResults) {
        if (!uniqueResults[result.source.fileName]) {
            uniqueResults[result.source.fileName] = result;
        }
        if(Object.keys(uniqueResults).length >= MAX_RESULTS) break;
    }
    
    return Promise.resolve(Object.values(uniqueResults));
};
