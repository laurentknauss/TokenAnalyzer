# TokenAnalyzer 📝

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20%2B-green.svg)](https://nodejs.org/)
[![GitHub issues](https://img.shields.io/github/issues/laurentknauss/TokenAnalyzer.svg)](https://github.com/laurentknauss/TokenAnalyzer/issues)
[![GitHub stars](https://img.shields.io/github/stars/laurentknauss/TokenAnalyzer.svg?style=social&label=Star)](https://github.com/laurentknauss/TokenAnalyzer/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/laurentknauss/TokenAnalyzer.svg?style=social&label=Fork)](https://github.com/laurentknauss/TokenAnalyzer/network/members)

**TokenAnalyzer** is a TypeScript CLI for token analysis, prompt optimization, model comparison, and session statistics for OpenAI API usage.

## Why TokenAnalyzer?

- **Cost Estimation**: Estimate input and output token costs using the pricing table configured in `src/pricing.ts`
- **Model Comparison**: Compare token counts across supported models before making API calls
- **Token Analysis**: Inspect token counts, token breakdowns, and basic text-efficiency metrics
- **Prompt Optimization**: Apply lightweight prompt-cleanup heuristics and receive optimization suggestions
- **Session Tracking**: Track prompt tokens, response tokens, and estimated session costs

## 🚀 Quick Start

### Requirements

- Node.js 20+
- An OpenAI API key for the API example

### Installation

```bash
git clone https://github.com/laurentknauss/TokenAnalyzer.git
cd TokenAnalyzer
npm install
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

The production build is emitted to `dist/` and the application starts from `dist/index.js`.

### Example Analysis

```typescript
const prompt = "Explain quantum computing in simple terms";

// TokenAnalyzer reports:
// - Token count
// - Estimated input cost
// - Token breakdown
// - Efficiency metrics
// - Optimization suggestions
// - Model comparisons
```

> **Note:** Cost figures are estimates based on the pricing table in `src/pricing.ts`. They are not guaranteed to match the final amount billed by the OpenAI API, and token counts calculated locally can differ from API usage because API requests include additional message/request overhead.

## 📦 Project Structure

```text
.
├── src/                  TypeScript source code
├── tests/                Node.js test suite
├── dist/                 Compiled JavaScript output
├── .env.example          Environment variable example
├── README.md             Documentation
├── tsconfig.json         TypeScript configuration
└── package.json          Dependencies and scripts
```

## 🔧 NPM Scripts

- `npm run build` : Compile TypeScript to JavaScript in `dist/`
- `npm test`      : Run the Node.js test suite
- `npm start`     : Run the application from `dist/index.js`
- `npm run dev`   : Run directly from TypeScript source with `tsx`

## 🛠️ Key Features

- **Token Analysis**: Get detailed token counts for prompts and responses
- **Input/Output Cost Estimation**: Apply separate input and output pricing when estimating API costs
- **Prompt Optimization**: Normalize whitespace and punctuation and identify simple optimization opportunities
- **Model Comparison**: Compare token counts and estimated costs across configured models
- **Session Statistics**: Track total prompt tokens, response tokens, requests, and estimated cost
- **JSON Export**: Save session statistics as a dated JSON file
- **Real-time Feedback**: Display token and cost information directly in the terminal

## 💡 Use Cases

- **API Cost Optimization**: Identify prompts that may be reduced before production use
- **Prompt Engineering**: Compare prompt variants and inspect their token usage
- **Budget Planning**: Estimate API costs from expected token volumes
- **Development Testing**: Inspect tokenization during development
- **Model Selection**: Compare token usage and configured pricing between models

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

## 📁 Project Architecture

```text
src/
├── types.ts           # TypeScript definitions
├── pricing.ts         # Pricing and model management
├── tokenAnalysis.ts   # Token analysis and processing
├── sessionStats.ts    # Session statistics
├── display.ts         # Terminal display and formatting
└── index.ts           # Main entry point
```

### Detailed description

**types.ts** — Defines interfaces and types used throughout the application, including `TokenAnalysis`, `ModelPricing`, `SessionStats`, `OptimizationResult`, and utility types such as `TokenType`.

**pricing.ts** — Contains the configured model-pricing table and cost/recommendation helpers. Pricing values should be reviewed whenever OpenAI pricing changes.

**tokenAnalysis.ts** — Core analysis engine. Creates token encoders, analyzes text, calculates basic efficiency metrics, applies prompt-cleanup heuristics, and compares models. `analyzeTokens()` distinguishes input and output pricing.

**sessionStats.ts** — Creates, updates, displays, and persists session statistics.

**display.ts** — Formats analysis reports, model comparisons, API usage information, and estimated costs for terminal output.

**index.ts** — Application entry point. Loads environment configuration, initializes the OpenAI client and tokenizer, performs the example API request, and coordinates reporting and session statistics.

## 🔄 Data Flow

```text
index.ts (orchestration)
    ↓
tokenAnalysis.ts (prompt analysis)
    ↓
pricing.ts (cost estimation)
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
