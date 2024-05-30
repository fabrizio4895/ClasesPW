import '../Autos.css'
import Cabecera from './Cabecera'
import Menu from './Menu'
import Pie from './Pie'

import { useState, useEffect } from 'react'

function ConsultaPais() {

  const [criterio, setCriterio] = useState('');
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {

  }, [peliculas])

  function search(cadena) {
    fetch('http://localhost:3080/api/peliculas/findByCountry/' + cadena, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((res) => setPeliculas(res))
      .finally(() => {
        console.log("ya terminamos")
      })
  }

  return (
    <>
      <Cabecera />
      <Menu />
      <div className="data">
        <div className="search-wrapper">
          <span className="sr-only">Buscar por Pais</span>
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Buscar por..."
              onChange={(event) => setCriterio(event.target.value)}
            />
          </label>
          <button className="BtnBuscar" onClick={() => search(criterio)}>Buscar</button>
        </div>
        <hr />
        <ul className="card-grid">
          {peliculas &&
            peliculas.map((p, index) => (
              <li key={p.id}> {p.movie} {p.gender} {p.country} {p.email} {p.ip_address} </li>
            ))}
        </ul>
      </div>
      <Pie />
    </>
  );
}


export default ConsultaPais
