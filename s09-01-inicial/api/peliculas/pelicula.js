// AQUI IRA LA DEFINICION DE LAS API's CON RESPECTO A LAS PELICULAS

const express = require('express')
const path = require('path')
const fs = require('fs')  //File System para funciones asíncronas
const Archivo = path.join(__dirname, "../../json/movies.json")

// Función para leer el archivo
// Para simular que va a leer una Base de Datos

const leerDatos = () => {
    let rawData = fs.readFileSync(Archivo) //Va a leer el movies.json de texto en formato json
    let Datos = JSON.parse(rawData) // Ahora se parsea para que sea un objeto JSON
    return Datos
}