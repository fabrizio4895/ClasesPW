import React, {useState,useEffect} from 'react'
import axios from 'axios'

import '../App.css'

function Efecto (){
    const [data,setData] = useState({hits : []}) //hits es el atributo de un objeto, el cual está entre llaves

    /*UseEffect llama una función anónima (arrow) y es la función asíncrona, y esta función asíncrona no se va a ejecutar, para que lo haga llama al fetchData,
    cuando recibe la respuesta de la dirección url, se utiliza el useState y si cambia el valor de data, se refresca la pantalla */
    useEffect( ()=> { //Cuando se utiliza el async se utiliza el await, el await se queda esperando la respuesta
        async function fetchData(){
            const response = await axios(
                'https://hn.algolia.com/api/v1/search?query=redux'
            )
            setData(response.data)
        }
        fetchData()
    }, [data])

    return(
        <ul>
            {
                data.hits.map( item => (
                    <li key={item.objectID}> {item.author}</li>
                ))
            }
        </ul>
    )
}

export default Efecto