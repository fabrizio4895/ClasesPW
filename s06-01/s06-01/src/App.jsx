import { Routes, Route } from "react-router-dom"

import Inicio from "./componentes/Inicio"
import Modelos from './componentes/Modelos'
import Fabricantes from './componentes/Fabricantes'
import Repuestos from './componentes/Repuestos'
import Servicios from './componentes/Servicios'
import Contacto from "./componentes/Contacto"
import Detalle from './componentes/Detalle'
import DetalleNavegacion from './componentes/DetalleNavegacion'
import Destino from './componentes/Destino'

function App() {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={ <Inicio /> } />
        <Route path="/enlace1" element={ <Fabricantes /> } />
        <Route path="/enlace2" element={ <Modelos /> } />
        <Route path="/enlace3" element={ <Repuestos /> } />
        <Route path="/enlace4" element={ <Servicios /> } />
        <Route path="/enlace5" element={ <Contacto /> } />
        <Route path="/detalle/:id/:p1/:p2" element={ <Detalle /> } />
        <Route path="/detalleNav/:id/:p1/:p2" element={ <DetalleNavegacion /> } />
        <Route path="/destinoNav" element={ <Destino /> } />
      </Routes>
    </div>
  )
}

export default App
