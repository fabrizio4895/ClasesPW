import { useState, useEffect } from "react";
import '../App.css'
import Cabecera from './Cabecera'
import Menu from './Menu'
import Pie from './Pie'

function ConsultaTodo() {
  const [peliculas, setPeliculas] = useState([])

  useEffect(() => {
    fetch('http://localhost:3080/api/peliculas/findAll')
      .then((res) => res.json())
      .then((res) => setPeliculas(res))
      .finally(() => {
        console.log("ya terminamos")
      })
  }, [])

  return (
    <>
      <Cabecera />
      <Menu />
      <div>
        <ol>
          {peliculas &&
            peliculas.map((p, index) => (
              <li key={p.id}> {p.movie} {p.gender} {p.country} {p.email} {p.ip_address} </li>
            ))}
        </ol>
      </div>
      <Pie />
    </>
  );
}

export default ConsultaTodo;