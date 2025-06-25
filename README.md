# NexusAI - Advanced AGI System

A sophisticated AI interface that simulates an advanced AGI system with terminal-like interactions, file system operations, process monitoring, and chat capabilities.

## 🎥 Video Demonstration

Watch the NexusAI system in action: [Video Demonstration](https://drive.google.com/file/d/1cqYjeRyNtDUzOMbgO3Q7h84_Xv1RR5mP/view?usp=sharing)

## 🚀 Features

- **Terminal Interface**: Authentic terminal-like experience with command-line interactions
- **File System Operations**: Browse, read, and manage files through the interface
- **Process Monitoring**: Real-time system process information
- **Network Statistics**: Network interface monitoring and statistics
- **Chat System**: Interactive AI chat with message persistence
- **System Information**: Comprehensive system statistics and monitoring
- **Modern UI**: Beautiful, responsive interface with dark theme

## 🛠️ Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd nexusai-project
   ```

2. Install dependencies
   ```bash
   npm install
   ```

## 🎯 Usage

1. Start the backend server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

The server runs on port `3000` and serves both the API endpoints and the front-end interface.

## 📡 API Endpoints

- `POST /api/openai/test` – Validate API key (mock implementation)
- `POST /api/chat` – Store chat messages and return AI responses
- `GET /api/files?path=.` – List files and folders in specified directory
- `GET /api/file?path=<file>` – Read file contents
- `POST /api/file` – Create or update files `{ path, content }`
- `GET /api/processes` – List running system processes
- `GET /api/network` – Network interface information
- `GET /api/system` – System statistics and information

## 🧪 Testing

Run the test suite:
```bash
npm test
```

This starts the server and queries the `/api/system` endpoint to ensure proper functionality.

## 🏗️ Architecture

- **Frontend**: Single-page application with modern UI components
- **Backend**: Express.js server with RESTful API
- **Database**: SQLite for message persistence
- **Styling**: Tailwind CSS with custom terminal styling

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.
