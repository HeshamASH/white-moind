// api/tools.ts
import { ChatMessage, MessageRole, Content } from '../types';

export const mapHistoryToApi = (chatHistory: ChatMessage[]): Content[] => {
    return chatHistory.map(msg => {
      const parts: any[] = [];
      // Only include content for user and model roles.
      if (msg.role !== MessageRole.TOOL && msg.content) {
          parts.push({ text: msg.content });
      }
      if (msg.image) {
          const [mimeType, data] = msg.image.split(';base64,');
          parts.push({ inlineData: { mimeType: mimeType.replace('data:', ''), data } });
      }
      
      let role: 'user' | 'model' | 'tool';
      switch(msg.role) {
          case MessageRole.USER: role = 'user'; break;
          case MessageRole.MODEL: role = 'model'; break;
          case MessageRole.TOOL: role = 'tool'; break;
          default: role = 'user';
      }
      return { role, parts };
    }).filter(c => c.parts.length > 0);
};
