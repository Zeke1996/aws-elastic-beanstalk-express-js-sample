const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('You have won 100 Million Dollars!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
