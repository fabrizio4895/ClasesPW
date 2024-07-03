/* de paises hacia movies */
const express = require('express')
const db = require('../db/models/index.js')
const movie = require('../db/models/movie.js')
const country = require('../db/models/country.js')
const director = require('../db/models/director.js')

// Para usar funciones
const ruta = express.Router()
ruta.get('/d1', async(req,res) => { 
    let paises = await db.country.findAll({ //anda a la base de datos y busca los elementos de los paises
        attributes : ['id','name'],
        where : {
            id : [3, 21,554,138]
        },
        order : [
            ['name','ASC']
        ],
        include : ['peliculas'] //incluye la relación de peliculas

    })
    //Se devuelve arreglo para mostrar en consola
    paises.forEach(p => {
        console.log(p.get('id'), p.get('name'))
        let peliculas = p.get('peliculas')
        peliculas.forEach(peli => {
            console.log( peli.get('title'))
        })
    });
    res.status(200).json(paises)
})

ruta.get('/d2', async(req,res) => {
    let paises = await db.country.findAll({
        attributes : ['id','name'],
        where : {
            id : [3, 21,554,138]
        },
        order : [
            ['name','ASC']
        ],
        include : ['directores']

    });
    res.status(200).json(paises)
})



module.exports = ruta