# Contributing to NexusAI

Thank you for your interest in contributing to NexusAI! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

We welcome contributions from the community! Here are the main ways you can contribute:

### 🐛 Reporting Bugs

- Use the [issue template](ISSUE_TEMPLATE.md) when reporting bugs
- Include detailed steps to reproduce the issue
- Provide information about your environment (OS, Node.js version, etc.)
- Include error messages and stack traces if applicable

### 💡 Suggesting Enhancements

- Use the issue template and label it as an enhancement
- Clearly describe the feature you'd like to see
- Explain why this feature would be useful
- If possible, provide mockups or examples

### 🔧 Code Contributions

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/nexusai-project.git
   cd nexusai-project
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the coding standards below
   - Write tests for new functionality
   - Update documentation as needed

4. **Test your changes**
   ```bash
   npm test
   npm start  # Test the application manually
   ```

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Use the [pull request template](PULL_REQUEST_TEMPLATE.md)
   - Provide a clear description of your changes
   - Link any related issues

## 📋 Development Setup

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Git

### Local Development

1. **Clone and install dependencies**
   ```bash
   git clone https://github.com/stix26/nexusai-project.git
   cd nexusai-project
   npm install
   ```

2. **Start the development server**
   ```bash
   npm start
   ```

3. **Run tests**
   ```bash
   npm test
   ```

## 📝 Coding Standards

### JavaScript/Node.js

- Use ES6+ features when possible
- Follow consistent naming conventions (camelCase for variables/functions, PascalCase for classes)
- Add JSDoc comments for functions and classes
- Keep functions small and focused
- Use meaningful variable and function names

### HTML/CSS

- Use semantic HTML elements
- Follow BEM methodology for CSS classes
- Use Tailwind CSS utility classes when possible
- Ensure responsive design principles

### Git Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding or updating tests
- `chore:` for maintenance tasks

Example:
```
feat: add file system browser component

- Add new component for browsing project files
- Implement file tree navigation
- Add file preview functionality

Closes #123
```

## 🧪 Testing

- Write tests for new functionality
- Ensure all existing tests pass
- Test on different browsers and devices when applicable
- Include both unit tests and integration tests

## 📚 Documentation

- Update README.md for significant changes
- Add inline comments for complex logic
- Update API documentation if endpoints change
- Include examples for new features

## 🔍 Code Review Process

1. All pull requests require review from maintainers
2. Address any feedback or requested changes
3. Ensure CI/CD checks pass
4. Maintainers will merge after approval

## 🏷️ Issue Labels

We use the following labels to categorize issues:

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements or additions to documentation
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `question` - Further information is requested

## 📞 Getting Help

If you need help with contributing:

- Check existing issues and pull requests
- Join our community discussions
- Contact the maintainers directly

## 📄 License

By contributing to NexusAI, you agree that your contributions will be licensed under the MIT License.

## 🙏 Recognition

Contributors will be recognized in the project's README and release notes. Thank you for helping make NexusAI better!