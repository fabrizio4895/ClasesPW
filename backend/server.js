// Este es el servidor central

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path")

// Servidor que se va a ejecutar
const app = express()
const port = 3000

// Esta es data de ejemplo
const users = ['Juan','Ana','Pedro','Agustín']

app.use(express.static(path.join(__dirname, './static'))) // Ruta desde la que va servir las rutas estáticas.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded()) //Esto codifica la url recibida. Ejm: %20% como espacio en la url.

//Agregar el servicio de páginas web  //Req es lo que envía el cliente y response es la respuesta del servidor
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'./static/index.html')) //Cuando llames al url por default, con la / automaticamente, llama al static/index
})

// Agregamos las API's
app.get('/api/usuarios',(req,res) =>{
    res.json(users)
})

app.post('/api/usuario/agregar',(req,res)=>{
    const usuario = req.body.user 
    users.push(usuario)
    res.json("Usuario agregado")
})


// Inicia el server
app.listen(port, ()=>{
    console.log("Servidor escuchando en puerto ",port)
})

