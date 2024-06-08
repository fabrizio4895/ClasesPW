import '../App.css'
import Cabecera from './Cabecera'
import Menu from './Menu'
import Pie from './Pie'

import Models from '../assets/data/models.json'

function Fabricantes() {
    return (
        <>
            <Cabecera />
            <Menu />
            <div className='data'>
            <ul>
            {
                Models.map((data) => {
                    return <li key={data.id}>{data.nombre} </li>
                })
            }
            </ul>
            </div>
            <Pie />
        </>
    )
}

export default Fabricantes