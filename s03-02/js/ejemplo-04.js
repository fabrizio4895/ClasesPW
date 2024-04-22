//Ahora para los carros comerciales

var autocomercial = document.getElementById("comercial");
console.log(autocomercial);

//Para que me dé los nodos hijos
var nodos = autocomercial.childNodes
var arr_comercial = []

for (let i = 0; i < nodos.length; i++) {
    console.log(nodos[i])

    if (nodos[i].nodeType == document.ELEMENT_NODE) {
        arr_comercial.push(nodos[i].textContent)
    }
} //Del for

document.getElementById("rpta1").innerHTML = arr_comercial; 

// Insertar elementos en el arreglo
arr_comercial.splice(1 , 0 , 'Hyundai', 'JAC') //El splice hace que en la posición 1, no se elimina nada y se insertan los que se pongan, en este caso, Hyundai y JAC
document.getElementById("rpta2").innerHTML = arr_comercial

// Insertar y borrar elementos en el arreglo
arr_comercial.splice(1 , 2 , 'Lancia', 'Seat') //El splice hace que en la posición 1, se eliminen los 2 elementos, es decir, el de la posición 1 y 2 y se insertan los que se pongan, en este caso, Hyundai y JAC
document.getElementById("rpta3").innerHTML = arr_comercial

// Borrar
arr_comercial.splice(0,2) // Se eliminan dos elementos desde la posicion 0, es decir, los dos primeros
document.getElementById("rpta4").innerHTML = arr_comercial

// Sort
arr_comercial.sort()
document.getElementById("rpta5").innerHTML = arr_comercial

//Ordenar al revés
arr_comercial.reverse()
document.getElementById("rpta6").innerHTML = arr_comercial