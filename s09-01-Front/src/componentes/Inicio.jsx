import '../App.css'
import Cabecera from './Cabecera'
import Menu from './Menu'
import Pie from './Pie'
import Logo from '../assets/logo/logo.jpg'

function Inicio() {

    return (
      <>
      <Cabecera/>
        <Menu/>
        <div>
          <img src={Logo} className="logo" alt="Logo del sitio web" />
        </div>

        <Pie/>
      </>
    )
  }
  
  export default Inicio;