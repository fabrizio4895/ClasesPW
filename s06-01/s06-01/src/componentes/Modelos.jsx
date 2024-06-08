import '../Autos.css'
import Cabecera from './Cabecera'
import Menu from './Menu'
import Pie from './Pie'

/***********************************************************************
FUENTE : https://www.freecodecamp.org/espanol/news/how-to-search-and-filter-components-in-react-como-hacer-una-busqueda-y-filtrado-de-resultados-en-componentes-de-react/
***********************************************************************/

import { useState, useEffect } from 'react'

function Modelos() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [criterio, setCriterio] = useState('');
    const [items, setItems] = useState([]);
    const [rpta, setRpta] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    useEffect(() => {
        fetch('/data/autos.json', {
                headers : { 
                    'Content-Type': 'application/json',
                     'Accept': 'application/json'
                 }
             } )
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                    console.log(result)
                },

                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    /* here we create a function 
    //     we filter the items
    // use array property .some() to return an item even if other requirements didn't match
    */
    function search(cadena) {
        console.log(cadena)

        let lista = []
        let i=0

        items.forEach( (elem)  => {
            elem.modelos.filter( (modelo) => {
                //console.log(modelo)
                let m = modelo['num']
                if ( m.includes(cadena)  ) {
                    i = i + 1
                    lista.push(<li key={i}>{elem.nombre} - {m} <img src={modelo['imagen']} className='autito'/></li>)

                }
            })
        })

        setRpta(lista)
    }

    console.log(error)
    if (error) {
        return (
            <p>
                {error.message}, Si sale este error debes revisar tus datos ,{" "}
                <a href="https://www.google.com">
                    {" "}
                    check it out{" "}
                </a>{" "}
            </p>
        );
    } else if (!isLoaded) {
        return <>Buscando...</>;
    } else {
        return (
            <>
                <Cabecera />
                <Menu />
                <div className="data">
                    <div className="search-wrapper">
                        <span className="sr-only">Buscar por modelos</span>
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
                        <button className="BtnBuscar"  onClick={ () => search(criterio) }>Buscar</button>
                    </div>
                    <hr/>
                    <ul className="card-grid">
                        {rpta}
                    </ul>
                </div>
                <Pie/>
            </>
        );
    }
}

export default Modelos
