// -------SERVIDOR CENTRAL-------

const express = require("express") //Requiere express el servidor
const bodyParser = require("body-parser")
const path = require("path") //Permite acceder a los archivos del sistema operativo

// Esta es el servidor que se ejecuta
const app = express()
const port = 3000

// Esta es la data de ejemplo
const users = ['Juan','Ana','Pedro','Luis'] //Data que puede salir de la base de datos



//DIRNAME toma la ruta que esta corriendo el servidor
app.use(express.static(path.join(__dirname,'./static'))) //Las rutas desde que va a servir las rutas estáticas
app.use(bodyParser.json() )  // La data que va a procesar en JSON
app.use(bodyParser.urlencoded() )  // Son los espacios en la url codificados




// Agregar el servicio de páginas web
//Cuando llames al servidor con la url por default, la respuesta será el index.html
app.get( '/', (req,res) => { // "req" contiene la data que estoy enviando y "res" contiene la data que se veuelve al cliente
    res.sendFile(path.join(__dirname,'./static/index.html'))
})



// Agregamos las API'S
app.get( '/api/usuarios', (req,res) => {
    res.json( users )
})

app.post( '/api/usuarios/agregar', (req,res) => {
    const usuario = req.body.user //Usuario tomara valor de user, el cual es digitado en cmd como "user=Juler"
    users.push (usuario) // El usuario creado se pushea al arreglo users
    res.json( "Usuario agregado" ) //responde con "usuario agregado" cuando se agrega el usuario creado al arreglo
})



// Acá se inicia el server
app.listen( port, ()=> {
    console.log("Servidor escuchando en puerto: ",port)
})

