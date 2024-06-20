import { Routes, Route } from "react-router-dom"

import Inicio from "./componentes/Inicio"

function App() {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={ <Inicio /> } />
      </Routes>
    </div>
  )
}

export default App
