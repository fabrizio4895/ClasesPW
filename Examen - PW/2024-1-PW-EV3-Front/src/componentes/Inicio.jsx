import '../App.css'
import Cabecera from './Cabecera'
import Menu from './Menu'
import Pie from './Pie'

import { useState, useEffect } from 'react'

function Inicio() {

    const [pokedex, setPokedex] = useState([])
  
    useEffect(() => {
      fetch('http://localhost:3080/api/rpta/findAll')
        .then((res) => res.json())
        .then((res) => setPokedex(res))
        .finally(() => {
          console.log("ya terminamos")
        })
    }, [])

    
 
    return (
        <>
            <Cabecera />
            <Menu />
            <h1>E V 3</h1>
            <div className='data'>
                <ol>
                {pokedex &&
                    pokedex.map((p, index) => (
                    <li key={p.id}> {p.name} {p.id} </li>
                    ))}
                </ol>
            </div>
            <Pie />
        </>
    );

}

export default Inicio;