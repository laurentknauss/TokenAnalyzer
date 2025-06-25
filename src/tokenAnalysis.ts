import { encoding_for_model, type Tiktoken, type TiktokenModel } from "tiktoken";
import type { TokenAnalysis, TokenBreakdown, EfficiencyMetrics, OptimizationResult, ModelComparison } from './types.js';
import { calculateCost, MODEL_PRICING } from './pricing.js';

export const createEncoder = (model: string): Tiktoken => {
  return encoding_for_model(model as TiktokenModel);
};

export const analyzeTokens = (text: string, model: string, encoder: Tiktoken): TokenAnalysis => {
  const tokens = encoder.encode(text);
  const tokenArray = Array.from(tokens);

  return {
    totalTokens: tokens.length,
    tokenList: tokenArray,
    estimatedCost: calculateCost(tokens.length, model, 'input'),
    breakdown: getTokenBreakdown(tokens, encoder),
    efficiency: calculateEfficiency(text, tokens.length)
  };
};
const getTokenBreakdown = (tokens: Uint32Array, encoder: Tiktoken): TokenBreakdown[] => {
  const breakdown: TokenBreakdown[] = [];

  for (let i = 0; i < tokens.length; i++) {
    try {
      const singleTokenArray = new Uint32Array([tokens[i]]);
      const decoded = encoder.decode(singleTokenArray);
      const singleToken = new TextDecoder().decode(decoded);
      breakdown.push({
        tokenId: tokens[i],
        text: singleToken,
        position: i
      });
    } catch (error) {
      breakdown.push({
        tokenId: tokens[i],
        text: "[SPECIAL]",
        position: i
      });
    }
  }

  return breakdown;
};


const calculateEfficiency = (text: string, tokenCount: number): EfficiencyMetrics => {
  const charPerToken = text.length / tokenCount;
  const wordCount = text.split(/\s+/).length;
  const wordPerToken = wordCount / tokenCount;

  const efficiency = charPerToken > 3 ? "Excellente" : charPerToken > 2 ? "Bonne" : "Faible";

  return {
    charactersPerToken: charPerToken.toFixed(2),
    wordsPerToken: wordPerToken.toFixed(2),
    efficiency
  };
};

export const optimizePrompt = (prompt: string, encoder: Tiktoken): OptimizationResult => {
  const suggestions: string[] = [];

  // Détecte les répétitions
  const words = prompt.split(/\s+/);
  const wordCount: Record<string, number> = {};

  words.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });

  const repeatedWords = Object.entries(wordCount)
    .filter(([word, count]) => count > 2 && word.length > 3)
    .map(([word]) => word);

  if (repeatedWords.length > 0) {
    suggestions.push(`Mots répétés détectés: ${repeatedWords.join(', ')}`);
  }

  // Détecte les mots de liaison excessifs
  const fillerWords = ['très', 'vraiment', 'absolument', 'complètement', 'totalement'];
  const foundFillers = words.filter(word => fillerWords.includes(word.toLowerCase()));

  if (foundFillers.length > 0) {
    suggestions.push(`Mots de liaison à réduire: ${foundFillers.join(', ')}`);
  }

  // Propose une version optimisée
  const optimized = prompt
    .replace(/\s+/g, ' ')
    .replace(/[.]{2,}/g, '.')
    .replace(/[,]{2,}/g, ',')
    .trim();

  return {
    original: prompt,
    optimized,
    suggestions,
    tokenSaved: encoder.encode(prompt).length - encoder.encode(optimized).length
  };
};

export const compareModels = (prompt: string): ModelComparison => {
  const models = ["gpt-3.5-turbo", "gpt-4", "gpt-4-turbo", "gpt-4o", "gpt-4o-mini", "o3", "o3-mini"];
  const comparison: ModelComparison = {};

  models.forEach(model => {
    try {
      const encoder = createEncoder(model);
      const tokens = encoder.encode(prompt);
      comparison[model] = {
        tokens: tokens.length,
        estimatedCost: calculateCost(tokens.length, model, 'input'),
        pricing: MODEL_PRICING[model]
      };
      encoder.free();
    } catch (error) {
      comparison[model] = { error: "Modèle non supporté" };
    }
  });

  return comparison;
};
