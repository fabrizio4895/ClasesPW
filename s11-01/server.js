const express = require('express');
const bodyParser = require("body-parser")
const path = require('path');

// registrar las apis
const consulta = require('./api/consulta.js')

const app = express()
const port = 3080

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.json());

// Mapear la api con la url de invocación
app.use('/api/consulta',consulta)
 
// Mapear la api con la URL de invocacion
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, './static/index.html'));
  });
  
app.listen(port, () => {
    console.log(`Server escuchando en el port::${port}`);
});