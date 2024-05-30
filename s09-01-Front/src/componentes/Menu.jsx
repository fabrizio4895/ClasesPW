import React from 'react'
import { Link } from "react-router-dom";

import '../Autos.css'

function Menu() {

    return (
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link><i className="arrow"></i></li>
                <li><Link to="/ejemploFetch">Consulta Banderas</Link><i className="arrow"></i></li>
                <li><Link to="/consultaTodo">Consulta Peliculas</Link><i className="arrow"></i></li>
                <li><Link to="/consultaPais">Consulta Peliculas x Pais</Link><i className="arrow"></i></li>
                <li><Link to="/agregarPelicula">Agregar Pelicula</Link><i className="arrow"></i></li>
            </ul>
        </nav>
    )
    
}


export default Menu