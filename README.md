# NexusAI Project

This project contains a single-page front‑end interface (`index.html`) and a lightweight backend written in Node.js. The backend exposes JSON APIs used by the front‑end and stores chat messages in a small SQLite database.

## Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd nexusai-project
   ```
2. Install dependencies
   ```bash
   npm install
   ```

## Usage

Start the backend:
```bash
npm start
```
This launches an Express server on port `3000` with the following endpoints:
- `POST /api/openai/test` – validate the provided API key (mock implementation)
- `POST /api/chat` – store the chat message in the database and return an echo
- `GET /api/files?path=.` – list files and folders
- `GET /api/file?path=<file>` – read a file
- `POST /api/file` – create or update a file `{ path, content }`
- `GET /api/processes` – list running processes
- `GET /api/network` – network interface information
- `GET /api/system` – system statistics

The front‑end can be opened directly in the browser by opening `index.html`.

## Tests

Run the basic test suite with:
```bash
npm test
```
This starts the server and queries the `/api/system` endpoint to ensure it responds.

## License

This project is licensed under the MIT License.
