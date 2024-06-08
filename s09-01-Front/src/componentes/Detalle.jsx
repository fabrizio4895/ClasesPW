import { useParams } from "react-router-dom";

function Detalle() {
    let { id, p1, p2 } = useParams();    
    let { a } = useParams();


    return (
        <>
        <h1>Esta es la pagina Detalle</h1>
        <div style={{ fontSize: "50px" }}>
            Los parametros son :{id} - {p1} - {p2}
        </div>
        </>
    );
}

export default Detalle