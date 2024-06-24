/*
Aquí vamos a definir las operaciones de acceso a la Base de datos
*/

const express = require('express')
const path = require('path')
const db = require('../../db/models/index.js'); //contiene toda la definicion de los modelos creados

// Permite manejar las ruta URL
const ruta = express.Router()

ruta.get('/findAllusers', async(req,res) => { // Async porque esta operación puede demorar, no necesariamente contesta rápido
    console.log("Invocando al FindAllusers")
    let lusers = await( db.user.findAll({ }) ) //Si hay una condicion de where, se coloca en las llaves, sino, se deja en blanco
    return res.json(lusers)
}) 

ruta.post('/newUser', async(req,res) => {
    const u = req.body.u;
    await db.user.create({
        "nombre" : u  
    })
    return res.json("Usuario agregado")
})

module.exports = ruta