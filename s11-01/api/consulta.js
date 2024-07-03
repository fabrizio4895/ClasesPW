const express = require('express') // Las rutas se manejan através de express
const db = require('../db/models/index.js')
const movie = require ('../db/models/movie.js')
const country = require ('../db/models/country.js')

// Para usar funciones
const sequelize = require('sequelize')

const ruta = express.Router()

/*
Ejemplo 1
*/ 
ruta.get('/q1/:id', async(req,res)=>{
    // Recuperar el parámetro id
    id = req.params.id
    console.log("Consulta de películas por Primary Key")
    let m = await db.movie.findByPk(id)
    if(m){
        console.log(m)
        res.status(200).json(m)
    } else{
        res.status(404).json({'msg': 'No se encotró ID'})
    }
})

/*
Ejemplo 2, no quiero todos los campos, sino solo id y título
*/ 
ruta.get('/q2/:id', async(req,res)=>{
    // Recuperar el parámetro id
    id = req.params.id
    console.log("Consulta de películas por Primary Key")
    let m = await db.movie.findByPk(id, { attributes : ['id','title']})
    if(m){
        console.log(m)
        res.status(200).json(m)
    } else{
        res.status(404).json({'msg': 'No se encotró ID'})
    }
})

/*
Ejemplo 3, quiero iformación de varias ids
Se pasará la lista como json (lista)
*/ 
ruta.get('/q3', async(req,res)=>{
    // Recuperar el parámetro id
    parametros = req.body
    console.log(parametros)
    listaIds = parametros.ids
    console.log(listaIds)
    console.log("Consulta de películas usando where")
    let listaMovies = await db.movie.findAll({ 
        attributes : ['id','title'],
        where:{
            id: listaIds
        },
        order : [
            ['title','ASC']
        ]
    })
    if(listaMovies){
        listaMovies.forEach(m => {
            console.log(m)
        });
        res.status(200).json(listaMovies)
    } else{
        res.status(404).json({'msg': 'No se encotró ID'})
    }
})

/*
Ejemplo 4, uso de count
*/ 
ruta.get('/q4', async(req,res)=>{
    console.log("Consulta usando COUNT")
    let m = await db.country.count()
  
    if(m){
        console.log(m)
        res.status(200).json(m)
    } else{
        res.status(404).json({'msg': 'No se encotró data'})
    }
})

// NO OLVIDAR EL export default ruta para que funcione
module.exports = ruta