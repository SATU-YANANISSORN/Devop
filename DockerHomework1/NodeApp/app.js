const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello from Node.js in Docker! 🚀</h1><p>It is working perfectly.</p>');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});