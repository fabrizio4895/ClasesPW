const express = require('express');
const bodyParser = require("body-parser")
const path = require('path');
const db = require('./db/models/index.js'); //contiene toda la definicion de los modelos creados

// Permitir CORS
const cors = require('cors')

const app = express()
const port = 3080

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.json());


// Indicar los dominios permitidos
const whitelist = ['http://localhost:5173'] //Admite el frontend
app.use(cors(whitelist)) //Usa cors y trabaja con esa lista de dominio

// Mapear la api con la URL de invocacion
app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, './static/index.html'));
});

app.listen(port, () => {
    console.log(`Server escuchando en el port::${port}`);
});

// UUna vez creada la API para que salga toda las películas, es decir, findAll
const peli = require('./api/peliculas/pelicula.js')
app.use('/api/peliculas',peli)
app.use('/api/usuarios',usuario)

// Se registra la api que vamos a crear
const usuario = require('./api/BaseDeDatos/usuario.js')