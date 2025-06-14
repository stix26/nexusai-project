const http = require('http');
const { spawn } = require('child_process');

const server = spawn('node', ['server.js']);

server.stdout.on('data', data => {
  if (data.toString().includes('Server running')) {
    http.get('http://localhost:3000/api/system', res => {
      let body = '';
      res.on('data', chunk => (body += chunk));
      res.on('end', () => {
        console.log('System endpoint response:', body.substring(0, 60));
        server.kill();
      });
    }).on('error', err => {
      console.error('Request failed', err);
      server.kill();
      process.exit(1);
    });
  }
});

server.on('exit', code => process.exit(code));
