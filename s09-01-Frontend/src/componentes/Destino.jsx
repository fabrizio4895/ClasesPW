import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Destino() {
    let { id, p1, p2 } = useParams();    
    const { state } = useLocation();

    return (
        <>
        <h1>Esta es la pagina Destino</h1>
        <div style={{ fontSize: "50px" }}>
            Los parametros son :
            {state.userData.id.toUpperCase()} - 
            {state.userData.p1.toUpperCase()} - 
            {state.userData.p2.toUpperCase()}
        </div>
        </>
    );
}

export default Destino