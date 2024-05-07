import { useParams,  useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function DetalleNavegacion() {
    let { id, p1, p2 } = useParams();   
    let navegar = useNavigate() 

    const obj = {
        id: id,
        p1: p1,
        p2: p2,
      };
    
    function handleClick() {
        navegar("/destinoNav", { state: { userData: obj } });
      }
    
    useEffect(() => {
       // navegar('/destino')
    }, [] )

    return (
        <>
        <h1>Esta es la pagina DetalleNav</h1>
        <div style={{ fontSize: "50px" }}>
            Los parametros son :{id} - {p1} - {p2}
        </div>
        <button onClick={handleClick}>Ir al Destino</button>
        </>
    );
}

export default DetalleNavegacion