import { writeFile } from 'fs/promises';
import type { SessionStats, ConversationEntry } from './types.js';

export const createSessionStats = (): SessionStats => ({
  totalRequests: 0,
  totalPromptTokens: 0,
  totalResponseTokens: 0,
  totalCost: 0,
  startTime: new Date(),
  conversations: []
});

export const updateSessionStats = (
  stats: SessionStats,
  promptTokens: number,
  responseTokens: number,
  cost: number
): SessionStats => ({
  ...stats,
  totalRequests: stats.totalRequests + 1,
  totalPromptTokens: stats.totalPromptTokens + promptTokens,
  totalResponseTokens: stats.totalResponseTokens + responseTokens,
  totalCost: stats.totalCost + cost,
  conversations: [
    ...stats.conversations,
    {
      timestamp: new Date(),
      promptTokens,
      responseTokens,
      cost
    }
  ]
});

export const saveSessionStats = async (stats: SessionStats): Promise<void> => {
  const statsFile = `token-stats-${new Date().toISOString().split('T')[0]}.json`;
  try {
    await writeFile(statsFile, JSON.stringify(stats, null, 2));
    console.log(`📊 Statistiques sauvegardées dans ${statsFile}`);
  } catch (error) {
    console.error("Erreur lors de la sauvegarde:", (error as Error).message);
  }
};

export const displaySessionStats = (stats: SessionStats): void => {
  const duration = new Date().getTime() - stats.startTime.getTime();
  const totalTokens = stats.totalPromptTokens + stats.totalResponseTokens;
  const avgTokensPerRequest = stats.totalRequests > 0 ? totalTokens / stats.totalRequests : 0;

  console.log("\n" + "=".repeat(60));
  console.log("📈 STATISTIQUES DE SESSION");
  console.log("=".repeat(60));
  console.log(`├─ Durée: ${Math.round(duration / 1000)}s`);
  console.log(`├─ Requêtes totales: ${stats.totalRequests}`);
  console.log(`├─ Tokens prompt: ${stats.totalPromptTokens}`);
  console.log(`├─ Tokens réponse: ${stats.totalResponseTokens}`);
  console.log(`├─ Tokens total: ${totalTokens}`);
  console.log(`├─ Moyenne par requête: ${avgTokensPerRequest.toFixed(1)} tokens`);
  console.log(`└─ Coût total estimé: $${stats.totalCost.toFixed(6)}`);
};
