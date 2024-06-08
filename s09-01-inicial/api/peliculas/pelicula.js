// Aquí va la definición de las APIs

const express = require ('express')
const path = require('path')
const fs = require('fs')
const { raw } = require('body-parser')
const Archivo = path.join(__dirname,"../../json/movies.json")

// Permitir manejar las rutas URL
const ruta = express.Router()

// Función para leer el archivo
// Con esto se va a simular que estoy leyendo una base de datos

const leerDatos = () => {
    let rawData = fs.readFileSync(Archivo) //fs = file system
    let Datos = JSON.parse(rawData)
    return Datos;
}

//API para leer todo el archivo
ruta.get('/findAll', async (req,res) => {
    console.log("Invocando a findAll")
    Datos = await leerDatos();
    res.set("Content","application/json") //el application/json es para que sepa en que formato se va a enviar
    res.json(Datos)
})


//API para filtrar la película por país
ruta.get('/findByCountry/:nombrePais', async (req,res) => {
    console.log("Invocando a find country")
    const pais = req.params.nombrePais //nombrePais viene de la URL
    console.log(pais)
    Datos = await leerDatos()
    //Filtrar 
    const rpta = Datos.filter((item) =>{ //(item) pasa por todos los "Datos" y si coincide con lo insertado en la url, retorna una de las peliculas
        if(item.country == pais){
            return item
        }
    })
    res.set("Content","application/json") //el application/json es para que sepa en que formato se va a enviar
    res.json(rpta) //Devuelve solo lo filtrado
})

//API para insertar una nueva pelicula
ruta.post('/newPelicula',async(req,res) =>{
    console.log("/newPelicula invocado")

    // Recuperar un objeto JSON
    const obj = req.body
    console.log(obj)

    // Escribir el archivo
    // Ver si el archivo existe
    if (fs.existsSync(Archivo) == false) {
        // Si no existe, crearlo
        fs.writeFileSync(Archivo, obj) //Se crea y se inserta el obj como primer atributo
    }else{//Si ya existe, agregar al final del JSON
        let Datos = leerDatos()
        Datos.push(obj)
        fs.writeFileSync(Archivo, JSON.stringify(Datos))
    }
    res.set("Content","application/json")
    res.status(201).send("pelicula agregada correctamente").end()
})

module.exports = ruta
