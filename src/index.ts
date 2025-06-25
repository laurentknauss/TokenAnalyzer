import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";
import { displayDetailedReport, displayModelComparison } from './display';
import { getModelRecommendation } from './pricing';
import {
  createSessionStats,
  displaySessionStats,
  saveSessionStats,
  updateSessionStats
} from './sessionStats';
import {
  analyzeTokens,
  compareModels,
  createEncoder,
  optimizePrompt
} from './tokenAnalysis';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const main = async (): Promise<void> => {
  const model = "gpt-3.5-turbo";
  const encoder = createEncoder(model);
  let sessionStats = createSessionStats();

  const prompt = "Quelle est la capitale de la Slovaquie ?";

  console.log("🚀 Démarrage de l'analyse avancée des tokens...\n");

  // Analyse du prompt
  console.log("🔍 ANALYSE DU PROMPT:");
  const promptAnalysis = analyzeTokens(prompt, model, encoder);
  console.log(`Prompt: "${prompt}"`);
  console.log(`Tokens: ${promptAnalysis.totalTokens}`);
  console.log(`Efficacité: ${promptAnalysis.efficiency.efficiency}`);

  // Optimisation du prompt
  console.log("\n⚡ OPTIMISATION DU PROMPT:");
  const optimization = optimizePrompt(prompt, encoder);
  if (optimization.suggestions.length > 0) {
    console.log("Suggestions:", optimization.suggestions);
    console.log(`Tokens économisés: ${optimization.tokenSaved}`);
  } else {
    console.log("✅ Le prompt est déjà optimisé !");
  }

  // Comparaison entre modèles
  const modelComparison = compareModels(prompt);
  displayModelComparison(modelComparison);

  // Recommandation de modèle
  console.log("\n💡 RECOMMANDATIONS:");
  const budgetRec = getModelRecommendation('budget');
  const reasoningRec = getModelRecommendation('reasoning');
  console.log(`Budget: ${budgetRec.model} - ${budgetRec.reason}`);
  console.log(`Raisonnement: ${reasoningRec.model} - ${reasoningRec.reason}`);

  try {
    // Appel API
    console.log("\n📡 APPEL API EN COURS...");
    const completion = await openai.chat.completions.create({
      model,
      messages: [{ role: "user", content: prompt }],
    });

    const responseText = completion.choices[0].message.content || "";
    const responseAnalysis = analyzeTokens(responseText, model, encoder);

    // Rapport détaillé
    displayDetailedReport(promptAnalysis, responseAnalysis, completion);

    // Affichage de la réponse
    console.log("\n💬 RÉPONSE:");
    console.log(`"${responseText}"`);

    // Mise à jour des stats
    const totalCost = promptAnalysis.estimatedCost + responseAnalysis.estimatedCost;
    sessionStats = updateSessionStats(
      sessionStats,
      promptAnalysis.totalTokens,
      responseAnalysis.totalTokens,
      totalCost
    );

    // Stats de session
    displaySessionStats(sessionStats);

    // Sauvegarde optionnelle
    await saveSessionStats(sessionStats);

  } catch (error) {
    console.error("❌ Erreur lors de l'appel à l'API OpenAI:", (error as Error).message);
  } finally {
    encoder.free();
  }
};

main().catch(console.error);
