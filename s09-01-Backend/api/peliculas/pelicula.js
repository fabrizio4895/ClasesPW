// AQUI IRA LA DEFINICION DE LAS API's CON RESPECTO A LAS PELICULAS

const express = require('express')
const path = require('path')
const fs = require('fs')  //File System para funciones asíncronas
const Archivo = path.join(__dirname, "../../json/movies.json")

// Permite manejar las ruta URL
const ruta = express.Router()


// Función para leer el archivo
// Para simular que va a leer una Base de Datos
const leerDatos = () => {
    let rawData = fs.readFileSync(Archivo) //Va a leer el movies.json de texto en formato json
    let Datos = JSON.parse(rawData) // Ahora se parsea para que sea un objeto JSON
    return Datos
}


//API para leer todo el archivo
ruta.get('/findAll', async(req,res) => { // Async porque esta operación puede demorar, no necesariamente contesta rápido
    console.log("Invocando al FindAll")
    Datos = await leerDatos()
    res.set("Content","application/json")
    res.json(Datos)
}) 

// API para filtrar por pais
ruta.get('/findByCountry/:nombrePais', async(req,res) => { 
    const pais = req.params.nombrePais //Del req, del parámetro saca el nombre del "nombrePais" y asígnalo a "pais"
    console.log(pais)
    Datos = await leerDatos() // Asigna los datos del json a "Datos"
    // Filtrar
    const rpta = Datos.filter( (item) => { //Por cada elemento o item del arreglo
        if(item.country == pais){
            return item
        }
    })
    res.set("Content","application/json")
    res.json(rpta)
}) 

// API para filtrar por pais
ruta.post('/newPelicula', async(req,res) => { 
    console.log("/newPelicula invocado")
    // Recuperar un objeto JSON
    const obj = req.body
    console.log(obj)

    // Escribir el archivo
    // Ver si el archivo existe
    if (fs.existsSync(Archivo) === false){
        // Si no existe, se crea
        fs.writeFileSync(Archivo, obj)
    } else {
        // Si ya existe, agregar al final
        let Datos = leerDatos()
        Datos.push (obj)
        fs.writeFileSync(Archivo, JSON.stringify(Datos)) // El objeto JSON lo convierto en cadena para poder escribir en el
    }
    res.set("Content","application/json")
    res.status(201).send("película agregada correctamente").end()
}) 

module.exports = ruta