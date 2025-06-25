import type { TokenAnalysis } from './types.js';

export const displayDetailedReport = (
  promptAnalysis: TokenAnalysis,
  responseAnalysis: TokenAnalysis,
  apiResponse: any
): void => {
  console.log("\n" + "=".repeat(60));
  console.log("📈 RAPPORT DÉTAILLÉ DES TOKENS");
  console.log("=".repeat(60));

  console.log("\n🔍 ANALYSE DU PROMPT:");
  console.log(`├─ Tokens: ${promptAnalysis.totalTokens}`);
  console.log(`├─ Efficacité: ${promptAnalysis.efficiency.efficiency} (${promptAnalysis.efficiency.charactersPerToken} char/token)`);
  console.log(`└─ Coût estimé: $${promptAnalysis.estimatedCost.toFixed(6)}`);

  console.log("\n💬 ANALYSE DE LA RÉPONSE:");
  console.log(`├─ Tokens: ${responseAnalysis.totalTokens}`);
  console.log(`├─ Efficacité: ${responseAnalysis.efficiency.efficiency} (${responseAnalysis.efficiency.charactersPerToken} char/token)`);
  console.log(`└─ Coût estimé: $${responseAnalysis.estimatedCost.toFixed(6)}`);

  const totalCost = promptAnalysis.estimatedCost + responseAnalysis.estimatedCost;
  console.log("\n💰 COÛT TOTAL:");
  console.log(`└─ $${totalCost.toFixed(6)}`);

  // Affiche les tokens de l'API si disponibles
  if (apiResponse.usage) {
    console.log("\n📊 DONNÉES API OFFICIELLES:");
    console.log(`├─ Prompt tokens: ${apiResponse.usage.prompt_tokens}`);
    console.log(`├─ Completion tokens: ${apiResponse.usage.completion_tokens}`);
    console.log(`└─ Total tokens: ${apiResponse.usage.total_tokens}`);

    // Compare avec nos calculs
    const promptDiff = Math.abs(apiResponse.usage.prompt_tokens - promptAnalysis.totalTokens);
    const responseDiff = Math.abs(apiResponse.usage.completion_tokens - responseAnalysis.totalTokens);

    console.log("\n🎯 PRÉCISION DE NOS CALCULS:");
    console.log(`├─ Différence prompt: ${promptDiff} tokens`);
    console.log(`└─ Différence réponse: ${responseDiff} tokens`);
  }
};

export const displayModelComparison = (comparison: Record<string, any>): void => {
  console.log("\n🔄 COMPARAISON ENTRE MODÈLES:");
  Object.entries(comparison).forEach(([model, data]) => {
    if (data.error) {
      console.log(`${model}: ${data.error}`);
    } else {
      console.log(`${model}: ${data.tokens} tokens ($${data.estimatedCost.toFixed(6)})`);
    }
  });
};
