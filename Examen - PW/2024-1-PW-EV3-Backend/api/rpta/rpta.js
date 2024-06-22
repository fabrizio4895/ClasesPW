const express = require('express')
const path = require('path')
const fs = require('fs')
const Archivo = path.join(__dirname, "../../data/pokedex.json")

const ruta = express.Router()

const leerDatos = () => {
    let rawData = fs.readFileSync(Archivo)
    let Datos = JSON.parse(rawData)
    return Datos
}

ruta.get('/findAll', async(req, res) =>{
    console.log("Devolviendo Todo el JSON")
    Datos = await leerDatos()
    res.set("Content", "application/json")
    res.json(Datos)
})
//PREGUNTA 1
ruta.get('/pregunta1/:idPokemon', async (req,res) => {
    const id = parseInt(req.params.idPokemon)
    console.log( id )
    Datos = await leerDatos()
    // Filtrar
    const rpta = Datos.filter( (item) => {
        if ( item.id === id) {
            return item
        }
    })
    res.set("Content","application/json")
    res.json(rpta)
})

ruta.get('/pregunta2/:nombreHabilidad', async (req,res) => {
    const abi = req.params.nombreHabilidad
    console.log( abi )
    Datos = await leerDatos()
    // Filtrar
    const rpta = Datos.filter( (item) => {
        if ( item.abilities === abi) {
            return item
        }
    })
    res.set("Content","application/json")
    res.json(rpta)
})

ruta.post('/pregunta3', async(req,res) => {
    console.log("pregunta 3 . . .")
    const obj = req.body
    console.log( obj )
    if ( fs.existsSync(Archivo) === false) {
    
        fs.writeFileSync(Archivo,  obj)       
    } else {
       
        let Datos = leerDatos()
        Datos.push( obj )
        fs.writeFileSync(Archivo, JSON.stringify(Datos))
    }
    res.set("Content","application/json")
    res.status(201).send("pokemon pregunta 3 agregado correctamente").end()
})

ruta.put('/pregunta4', async (req, res) => {
    const nuevaData = req.body;
    console.log(`/pregunta4 reemplazando data:`, nuevaData);

    if (fs.existsSync(Archivo) === false) {
        res.status(404).send("Archivo no encontrado").end();
    } else {
        let Datos = leerDatos();;
        if (pokedexIndex !== -1) {
            Datos[pokedexIndex] = { ...Datos[pokedexIndex], ...nuevaData };
            fs.writeFileSync(Archivo, JSON.stringify(Datos));
            res.set("Content", "application/json");
            res.status(200).send("pokedex actualizado correctamente").end();
        } else {
            res.status(404).send("item no encontrado").end();
        }
    }
})

module.exports = ruta