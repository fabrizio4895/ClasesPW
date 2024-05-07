import React from 'react'
import { Link } from "react-router-dom";

import '../Autos.css'

function Menu() {

    return (
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link><i className="arrow"></i></li>
                <li><Link to="/enlace1">Fabricantes</Link><i className="arrow"></i></li>
                <li><Link to="/enlace2">Modelos</Link><i className="arrow"></i></li>
                <li><Link to="/enlace3">Repuestos</Link><i className="arrow"></i></li>
                <li><Link to="/enlace4">Servicio</Link><i className="arrow"></i></li>
                <li><Link to="/enlace5">Contacto</Link><i className="arrow"></i></li>
            </ul>
        </nav>
    )
    
}


export default Menu