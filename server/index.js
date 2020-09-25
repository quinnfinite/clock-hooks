const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config()
const port = process.env.PORT;

const staticPath = path.join(__dirname, '../client')
app.use(express.static(staticPath))

app.get('/', (req, res) => {
  res.sendFile('index');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})