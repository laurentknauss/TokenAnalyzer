import type { ModelPricing, ModelRecommendation, PricingEvolution, UseCase } from './types.js';

export const MODEL_PRICING: Record<string, ModelPricing> = {
  // Modèles GPT-4 série
  "gpt-4": { input: 0.030, output: 0.060 },
  "gpt-4-32k": { input: 0.060, output: 0.120 },
  "gpt-4-turbo": { input: 0.010, output: 0.030 },

  // Modèles GPT-4o série
  "gpt-4o": { input: 0.0025, output: 0.010 },
  "gpt-4o-mini": { input: 0.00015, output: 0.0006 },
  "gpt-4o-audio-preview": { input: 0.0025, output: 0.010 },
  "gpt-4o-realtime-preview": { input: 0.005, output: 0.020 },

  // Modèles GPT-3.5 série
  "gpt-3.5-turbo": { input: 0.0005, output: 0.0015 },

  // Modèles de raisonnement o1 série
  "o1": { input: 0.015, output: 0.060 },
  "o1-mini": { input: 0.0011, output: 0.0044 },
  "o1-pro": { input: 0.150, output: 0.600 },

  // Nouveaux modèles o3 série (2025)
  "o3": { input: 0.010, output: 0.040 },
  "o3-mini": { input: 0.0011, output: 0.0044 },

  // Modèles spécialisés
  "computer-use-preview": { input: 0.003, output: 0.012 },
  "gpt-4.5-preview": { input: 0.075, output: 0.150 }
};

export const calculateCost = (tokenCount: number, model: string, type: 'input' | 'output' = 'input'): number => {
  const modelPricing = MODEL_PRICING[model];
  if (!modelPricing) return 0;

  const pricePerToken = modelPricing[type] / 1000;
  return tokenCount * pricePerToken;
};

export const getModelRecommendation = (useCase: UseCase): ModelRecommendation => {
  const recommendations: Record<UseCase, ModelRecommendation> = {
    budget: {
      model: "gpt-4o-mini",
      reason: "Excellent rapport qualité/prix à $0.15/$0.60 par million de tokens"
    },
    reasoning: {
      model: "o3-mini",
      reason: "Nouveau modèle 2025, 93% moins cher que o1 pour le raisonnement"
    },
    premium: {
      model: "gpt-4o",
      reason: "Multimodal rapide à $2.50/$10.00 par million de tokens"
    },
    elite: {
      model: "o3",
      reason: "Raisonnement de pointe à $10.00/$40.00 par million de tokens"
    }
  };

  return recommendations[useCase];
};

export const getPricingEvolution = (): PricingEvolution => ({
  "gpt-4o": {
    "2024": { input: 0.005, output: 0.015 },
    "2025": { input: 0.0025, output: 0.010 },
    "savings": "50% de réduction sur l'input, 33% sur l'output"
  },
  "o1-mini": {
    "2024": { input: 0.003, output: 0.012 },
    "2025": { input: 0.0011, output: 0.0044 },
    "savings": "63% de réduction sur l'input, 63% sur l'output"
  }
});
