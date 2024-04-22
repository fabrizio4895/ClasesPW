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

//Concatenar arreglos
document.getElementById("rpta2").innerHTML = arr_comercial.concat(['Lada','DFSK','Hyundai','Volvo'])

//Convertir un arreglo en cadena
document.getElementById("rpta3").innerHTML = arr_comercial.join('* * *') //Los asteriscos hacen que cada elemento del arreglo esté separado por esos asteriscos

//Buscar un elemento en el arreglo y devolver su posición
document.getElementById("rpta4").innerHTML = arr_comercial.indexOf('Mazda') // Esto devuelve la posición de Mazda en el arreglo