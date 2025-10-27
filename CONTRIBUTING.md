# Contributing to TokenAnalyzer

Thank you for your interest in contributing to TokenAnalyzer! We welcome contributions from the community.

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue with:
- A clear, descriptive title
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Your environment (OS, Node version, etc.)

### Suggesting Features

We love feature suggestions! Please open an issue with:
- A clear description of the feature
- Why it would be useful
- Potential implementation approach (if you have ideas)

### Pull Requests

1. **Fork the repository**
   ```bash
   gh repo fork laurentknauss/TokenAnalyzer --clone
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Write clear, concise commit messages
   - Follow the existing code style
   - Add tests if applicable
   - Update documentation as needed

4. **Test your changes**
   ```bash
   npm run build
   npm start
   ```

5. **Commit your changes**
   ```bash
   git commit -m "Add: description of your feature"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request**
   - Provide a clear description of the changes
   - Reference any related issues
   - Explain why the change is needed

## Development Setup

### Prerequisites
- Node.js 20.x or higher
- npm or yarn
- An OpenAI API key for testing

### Local Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/TokenAnalyzer.git
cd TokenAnalyzer

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your OpenAI API key to .env

# Run in development mode
npm run dev
```

## Code Style

- Use TypeScript for all new code
- Follow existing naming conventions
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

## Commit Message Guidelines

We follow conventional commit format:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Example:
```bash
feat: add support for GPT-4 Turbo token analysis
fix: correct cost calculation for long prompts
docs: update README with new examples
```
## Testing

Before submitting a PR:
1. Ensure your code compiles without errors: `npm run build`
2. Test the functionality manually
3. Check for TypeScript errors

## Questions?

Feel free to open an issue for any questions about contributing!

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Focus on what's best for the community

Thank you for contributing to TokenAnalyzer!
