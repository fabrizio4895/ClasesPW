import '../App.css'
import Cabecera from './Cabecera'
import Menu from './Menu'
import Pie from './Pie'
import Logo from '../assets/autos/ferrari.webp'

function Inicio() {

    return (
      <>
      <Cabecera/>
        <Menu/>
        <div>
          <img src={Logo} className="logoPrincipal" alt="Logo del sitio web" />
        </div>

        <Pie/>
      </>
    )
  }
  
  export default Inicio;