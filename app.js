{
  "name": "devops-app",
  "version": "1.0.0",
  "description": "Simple Node.js app for DevOps pipeline",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  }
}
ubuntu@ip-172-31-44-107:~/devops-node-app$ cat app.js
const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Navab, WElcome to DevOps project');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

