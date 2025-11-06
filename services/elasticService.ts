import { Source, ElasticResult } from '../types';

// Mock knowledge base data
const KNOWLEDGE_BASE: ElasticResult[] = [
  {
    source: {
      fileName: 'Fee Schedule 2024',
      path: 'Documents/Finance',
    },
    contentSnippet: `
Fee Schedule - Effective January 1, 2024

I. Transaction Fees
- Commercial Transactions (Standard): 2.9% + $0.30 USD
- International Payments (Receiving): 1.5% fee
- Currency Conversion: 4.0% spread

II. Withdrawal Fees
- Standard Bank Transfer (2-3 business days): Free
- Instant Transfer to Debit Card: 1.75% (min $0.25, max $25)
- Check Withdrawal: $1.50 USD

III. Other Fees
- Chargeback Fee: $20.00 USD
- Uncaptured Authorization: $0.30 USD
    `,
    score: 0.98,
  },
  {
    source: {
      fileName: 'Privacy Policy',
      path: 'Documents/Legal',
    },
    contentSnippet: `
Privacy Policy - Last Updated: June 1, 2024

How We Use Your Personal Data:
- To provide and maintain our service.
- To process transactions and prevent fraud.
- To communicate with you about your account.
- For marketing purposes, with your consent.

Data Sharing:
We do not sell your personal data. We may share information with trusted third-party service providers for business operations (e.g., identity verification, fraud prevention) under strict confidentiality agreements.
    `,
    score: 0.95,
  },
  {
    source: {
      fileName: 'Terms of Service',
      path: 'Documents/Legal',
    },
    contentSnippet: `
Terms of Service - Last Updated: June 1, 2024

Account Eligibility:
You must be at least 18 years old to create an account. Businesses must be legitimate and operate in a supported country.

Prohibited Activities:
Engaging in fraudulent activities, selling illegal goods, or violating intellectual property rights is strictly prohibited and will result in account termination.
    `,
    score: 0.92,
  },
];

export const searchKnowledgeBase = async (query: string): Promise<ElasticResult[]> => {
    console.log(`[Elastic Service] Searching for: "${query}"`);
    const lowerCaseQuery = query.toLowerCase();
    
    const results = KNOWLEDGE_BASE.filter(item => 
        item.contentSnippet.toLowerCase().includes(lowerCaseQuery) ||
        item.source.fileName.toLowerCase().includes(lowerCaseQuery)
    ).map(item => {
        const snippet = item.contentSnippet;
        const index = snippet.toLowerCase().indexOf(lowerCaseQuery);
        let highlightSnippet = item.contentSnippet;

        if (index > -1) {
            const start = Math.max(0, index - 70);
            const end = Math.min(snippet.length, index + lowerCaseQuery.length + 70);
            highlightSnippet = (start > 0 ? '...' : '') + snippet.substring(start, end) + (end < snippet.length ? '...' : '');
        } else {
            highlightSnippet = snippet.substring(0, 150) + (snippet.length > 150 ? '...' : '');
        }
        
        return { ...item, highlightSnippet: highlightSnippet.trim() };
    });

    return results.slice(0, 5); // Return top 5 results
};

export const getAllFiles = async (customDataset?: ElasticResult[]): Promise<Source[]> => {
    const allData = customDataset ? [...KNOWLEDGE_BASE, ...customDataset] : KNOWLEDGE_BASE;
    return allData.map(item => item.source);
};

export const getFileContent = async (source: Source): Promise<string | null> => {
    const file = KNOWLEDGE_BASE.find(item => 
        item.source.fileName === source.fileName && item.source.path === source.path
    );
    // For this mock, the snippet is the full content.
    return file ? file.contentSnippet.trim() : 'File content not found.';
};
