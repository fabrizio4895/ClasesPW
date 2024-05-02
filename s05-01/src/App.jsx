import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Lista1 from './componentes/Lista1'
import Efecto from './componentes/Efecto'

function App() {
  const [count, setCount] = useState(0)
  const [nombre, setNombre] = useState('')

  return (
    <>
      <div>
        <h1>Hola React</h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <br />
        <form>
          <label>Ingresa tu nombre</label>
          <input type="text" name="nombre" id="nombre" maxLength="10" 
           onChange={(event) => setNombre(event.target.value)} /> //Esto captura el valor del input y lo trae a nombre con el setNombre
        </form>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more -- {nombre}
      </p>
      
      <Efecto></Efecto>
    </>
  )
}

export default App
