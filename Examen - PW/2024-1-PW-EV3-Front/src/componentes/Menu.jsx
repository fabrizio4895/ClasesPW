import React from 'react'
import { Link } from "react-router-dom";

import '../Autos.css'

function Menu() {

    return (
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link><i className="arrow"></i></li>
            </ul>
        </nav>
    )
    
}


export default Menu