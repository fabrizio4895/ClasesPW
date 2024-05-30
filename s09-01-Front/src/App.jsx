import { Routes, Route } from "react-router-dom"

import Inicio from "./componentes/Inicio"
import EjemploFetch from "./componentes/EjemploFetch"
import ConsultaTodo from "./componentes/Consulta1"
import ConsultaPais from "./componentes/Consulta2"
import AgregarPelicula from "./componentes/Agregar"

function App() {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={ <Inicio /> } />

        <Route path="/ejemploFetch" element={ <EjemploFetch /> } />
        <Route path="/consultaTodo" element={ <ConsultaTodo /> } />
        <Route path="/consultaPais" element={ <ConsultaPais /> } />
        <Route path="/agregarPelicula" element={ <AgregarPelicula /> } />
      </Routes>
    </div>
  )
}

export default App
