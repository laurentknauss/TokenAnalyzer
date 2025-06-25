export interface ModelPricing {
  input: number;
  output: number;
}

export interface TokenAnalysis {
  totalTokens: number;
  tokenList: number[];
  estimatedCost: number;
  breakdown: TokenBreakdown[];
  efficiency: EfficiencyMetrics;
}

export interface TokenBreakdown {
  tokenId: number;
  text: string;
  position: number;
}

export interface EfficiencyMetrics {
  charactersPerToken: string;
  wordsPerToken: string;
  efficiency: 'Excellente' | 'Bonne' | 'Faible';
}

export interface OptimizationResult {
  original: string;
  optimized: string;
  suggestions: string[];
  tokenSaved: number;
}

export interface ModelComparison {
  [modelName: string]: {
    tokens?: number;
    estimatedCost?: number;
    pricing?: ModelPricing;
    error?: string;
  };
}

export interface ConversationEntry {
  timestamp: Date;
  promptTokens: number;
  responseTokens: number;
  cost: number;
}

export interface SessionStats {
  totalRequests: number;
  totalPromptTokens: number;
  totalResponseTokens: number;
  totalCost: number;
  startTime: Date;
  conversations: ConversationEntry[];
}

export interface ModelRecommendation {
  model: string;
  reason: string;
}

export interface PricingEvolution {
  [modelName: string]: {
    "2024": ModelPricing;
    "2025": ModelPricing;
    savings: string;
  };
}

export type UseCase = 'budget' | 'reasoning' | 'premium' | 'elite';
export type TokenType = 'input' | 'output';
