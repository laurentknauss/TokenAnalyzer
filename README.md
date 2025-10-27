# TokenAnalyzer 📝

[![npm version](https://img.shields.io/npm/v/@laurentknauss/tokenanalyzer.svg)](https://www.npmjs.com/package/@laurentknauss/tokenanalyzer)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20%2B-green.svg)](https://nodejs.org/)
[![GitHub issues](https://img.shields.io/github/issues/laurentknauss/TokenAnalyzer.svg)](https://github.com/laurentknauss/TokenAnalyzer/issues)
[![GitHub stars](https://img.shields.io/github/stars/laurentknauss/TokenAnalyzer.svg?style=social&label=Star)](https://github.com/laurentknauss/TokenAnalyzer/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/laurentknauss/TokenAnalyzer.svg?style=social&label=Fork)](https://github.com/laurentknauss/TokenAnalyzer/network/members)

**TokenAnalyzer** is a powerful CLI tool for advanced token analysis and optimization of OpenAI prompts. Measure token usage, optimize prompt costs, compare models, and track session statistics—all from your terminal.

## Why TokenAnalyzer?

- **Cost Optimization**: Reduce your OpenAI API costs by analyzing and optimizing token usage
- **Model Comparison**: Compare token counts across different GPT models before making API calls
- **Real-time Analysis**: Get instant feedback on prompt efficiency with detailed token breakdowns
- **Session Tracking**: Monitor your API usage with comprehensive statistics and cost estimates

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/laurentknauss/TokenAnalyzer.git
cd TokenAnalyzer

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env and add your OpenAI API key
```

### Basic Usage

```bash
# Build the project
npm run build

# Run the analyzer
npm start

# Or use in development mode
npm run dev
```

### Example Analysis

```typescript
// Example: Analyze a prompt
const prompt = "Explain quantum computing in simple terms";

// TokenAnalyzer will show:
// - Total tokens: 8
// - Estimated cost: $0.00024 (GPT-4)
// - Token breakdown by word
// - Optimization suggestions
// - Model comparisons
```
## 📦 Project Structure

```text
.
├── src/                  TypeScript source code
├── dist/                 Compiled JavaScript output
├── .env                  Environment variables
├── .env.example          Environment variable example
├── README.md             Documentation
├── tsconfig.json         TypeScript configuration
└── package.json          Dependencies and scripts
```
## 🔧 NPM Scripts

- `npm run build` : Compile TypeScript to JavaScript in `dist/`  
- `npm start`     : Run the application from `dist/index.js`  

## 🛠️ Key Features

- **Token Analysis**: Get detailed token counts for any prompt before sending to OpenAI
- **Cost Estimation**: Calculate exact costs across GPT-3.5, GPT-4, and other models
- **Prompt Optimization**: AI-powered suggestions to reduce token usage without losing meaning
- **Model Comparison**: Side-by-side comparison of token counts across different models
- **Session Statistics**: Track total tokens, costs, and API usage over time
- **JSON Export**: Save analysis results and statistics for later review
- **Real-time Feedback**: Instant token breakdown and optimization recommendations  

## 💡 Use Cases

- **API Cost Optimization**: Analyze prompts before production to reduce OpenAI costs
- **Prompt Engineering**: Test different prompt variations and choose the most efficient one
- **Budget Planning**: Estimate API costs for your application based on expected usage
- **Development Testing**: Debug token-related issues during development
- **Model Selection**: Determine the most cost-effective model for your use case

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

Quick start:
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

📁 Project Architecture

```text
src/
├── types.ts           # 🏗️ TypeScript Definitions
├── pricing.ts         # 💰 Price and model management
├── tokenAnalysis.ts   # 🔍 Token analysis and processing
├── sessionStats.ts    # 📊 Session statistics
├── display.ts         # 🖥️ Display and formatting
└── index.ts           # 🚀 Main entry point
```

📄 Detailed description of each file

**types.ts** - 🏗️ TypeScript Foundations  
**Role:** Defines all interfaces and types used in the application  
**Contains:**
- **TokenAnalysis:** Structure of token analyses
- **ModelPricing:** Model pricing
- **SessionStats:** Session statistics
- **OptimizationResult:** Optimization results
- **Utility types** (UseCase, TokenType, etc.)

**pricing.ts** - 💰 Economic Manager  
**Role:** Handles everything related to model pricing and recommendations  
**Main functions:**
- **MODEL_PRICING:** 2025 pricing database
- **calculateCost():** Calculates the cost of a request
- **getModelRecommendation():** Recommends a model based on usage
- **getPricingEvolution():** Compares 2024 vs 2025 prices

**tokenAnalysis.ts** - 🔍 Analysis Engine  
**Role:** Core of token analysis and optimization  
**Main functions:**
- **createEncoder():** Creates an encoder for a model
- **analyzeTokens():** Complete analysis of a text
- **optimizePrompt():** Optimizes a prompt to reduce tokens
- **compareModels():** Compares tokens across different models
- **getTokenBreakdown():** Breaks down tokens one by one

**sessionStats.ts** - 📊 Data Manager  
**Role:** Manages statistics and data persistence  
**Main functions:**
- **createSessionStats():** Initializes a new session
- **updateSessionStats():** Updates statistics
- **saveSessionStats():** Saves as JSON
- **displaySessionStats():** Displays the session summary

**display.ts** - 🖥️ User Interface  
**Role:** Handles all console display and formatting  
**Main functions:**
- **displayDetailedReport():** Full analysis report
- **displayModelComparison():** Shows model comparison
- Table and statistics formatting

**index.ts** - 🚀 Orchestrator  
**Role:** Entry point that coordinates all modules  
**Responsibilities:**
- Initializes OpenAI and the encoder
- Orchestrates the analysis flow
- Handles API calls
- Coordinates result display

🔄 Data Flow

```text
index.ts (orchestration)
    ↓
tokenAnalysis.ts (prompt analysis)
    ↓
pricing.ts (cost calculation)
    ↓
OpenAI API (call)
    ↓
tokenAnalysis.ts (response analysis)
    ↓
sessionStats.ts (stats update)
    ↓
display.ts (final display)
    ↓
sessionStats.ts (saving)
```
