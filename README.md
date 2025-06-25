# TokenAnalyzer 📝

TokenAnalyzer is a CLI tool for advanced analysis and optimization of OpenAI prompts. It measures tokens, compares models, and generates session statistics.

## 🚀 Installation

1. Clone the repository  
   ```bash
   git clone https://github.com/your-organization/TokenAnalyzer.git
   cd TokenAnalyzer
   ```
2. Install dependencies  
   ```bash
   npm install
   ```

## ⚙️ Configuration

1. Copy `.env.example` to `.env`:  
   ```bash
   cp .env.example .env
   ```
2. Open `.env` and set your OpenAI API key:  
   ```
   OPENAI_API_KEY=your_api_key_here
   NODE_ENV=development
   LOG_LEVEL=info
   ```

## 📦 Project Structure

```
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

## 🛠️ Features

- **Token Analysis**      : Detailed count of tokens used  
- **Prompt Optimization** : Suggestions to reduce prompt size  
- **Model Comparison**    : Evaluate different OpenAI models  
- **Session Statistics**  : Track tokens, estimated costs, and performance  
- **Detailed Reporting**  : JSON export or console output  

## 🤝 Contributing

Contributions are welcome! To contribute:  
1. Fork the repo  
2. Create a branch `feature/xxx`  
3. Make your changes  
4. Open a Pull Request  

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

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
