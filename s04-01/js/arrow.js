//Funciones arrow

function suma(){
    let v1 = document.getElementById("op1").value
    let v2 = document.getElementById("op2").value
    rpta = parseInt(v1) + parseInt(v2)
    document.getElementById("rpta").innerHTML = rpta
}

//Ahora usamos Arrow Function
let sumaArrow = () => {
    let v1 = document.getElementById("op1").value
    let v2 = document.getElementById("op2").value
    rpta = parseInt(v1) + parseInt(v2)
    document.getElementById("rpta").innerHTML = rpta
}


let sumaArrow2 = () => {
    let v1 = document.getElementById("op1").value
    let v2 = document.getElementById("op2").value
    rpta = sumaArrowOtraForma( parseInt(v1), parseInt(v2) )
    document.getElementById("rpta").innerHTML = rpta
}

let sumaArrowOtraForma = (a,b) => a + b