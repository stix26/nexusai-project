const express = require('express');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { exec } = require('child_process');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// simple sqlite db for messages
const db = new sqlite3.Database(path.join(__dirname, 'nexus.db'));

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sender TEXT,
    message TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
});

// Test OpenAI connection (mock)
app.post('/api/openai/test', (req, res) => {
  const { apiKey } = req.body;
  if (!apiKey) {
    return res.status(400).json({ success: false, message: 'API key missing' });
  }
  // Pretend to test the key
  return res.json({ success: true });
});

// Quick chat endpoint - echo response and store in db
app.post('/api/chat', (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message required' });
  }
  db.run('INSERT INTO messages(sender, message) VALUES (?,?)', ['user', message]);
  const reply = `Echo: ${message}`;
  db.run('INSERT INTO messages(sender, message) VALUES (?,?)', ['ai', reply]);
  res.json({ reply });
});

// File system operations
app.get('/api/files', (req, res) => {
  const dirPath = path.join(__dirname, req.query.path || '.');
  fs.readdir(dirPath, { withFileTypes: true }, (err, files) => {
    if (err) return res.status(500).json({ error: err.message });
    const list = files.map(f => ({
      name: f.name,
      type: f.isDirectory() ? 'folder' : 'file'
    }));
    res.json({ path: req.query.path || '.', list });
  });
});

app.get('/api/file', (req, res) => {
  const filePath = path.join(__dirname, req.query.path || '');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ data });
  });
});

app.post('/api/file', (req, res) => {
  const { path: filePath, content } = req.body;
  if (!filePath) return res.status(400).json({ error: 'path required' });
  fs.writeFile(path.join(__dirname, filePath), content || '', err => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

// Process list
app.get('/api/processes', (req, res) => {
  exec('ps -eo pid,comm,pcpu,pmem', (err, stdout) => {
    if (err) return res.status(500).json({ error: err.message });
    const lines = stdout.trim().split('\n').slice(1);
    const list = lines.map(l => {
      const [pid, command, cpu, mem] = l.trim().split(/\s+/,4);
      return { pid, command, cpu, mem };
    });
    res.json({ list });
  });
});

// Network stats (mock)
app.get('/api/network', (req, res) => {
  const interfaces = os.networkInterfaces();
  res.json({ interfaces });
});

// System info
app.get('/api/system', (req, res) => {
  res.json({
    hostname: os.hostname(),
    platform: os.platform(),
    uptime: os.uptime(),
    memory: os.totalmem(),
    freeMemory: os.freemem(),
    cpus: os.cpus().length
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
