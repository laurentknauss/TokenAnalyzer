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
