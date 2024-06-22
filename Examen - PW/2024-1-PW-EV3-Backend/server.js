/*const express = require('express');
const bodyParser = require("body-parser")
const path = require('path');
const cors = require('cors')
const rpta = require('./api/rpta/rpta.js')
const app = express()
const port = 3080

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.json());

app.use('/api/rpta' , rpta)

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, './static/index.html'));
});

app.listen(port, () => {
    console.log(`Server escuchando en el port::${port}`);
});*/

const express = require('express');
const bodyParser = require("body-parser")
const path = require('path');
const cors = require('cors')
const whitelist = ['http://localhost:5173']

const rptas = require('./api/rpta/rpta.js')

const app = express()
const port = 3080

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.json());
app.use(cors(whitelist))



app.use('/api/rpta', rptas)

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, './static/index.html'));
});

app.listen(port, () => {
    console.log(`Server escuchando en el port::${port}`);
});





























