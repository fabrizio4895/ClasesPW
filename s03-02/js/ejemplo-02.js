var autoslujo = document.getElementById("lujo");
console.log(autoslujo);

//Para que me dé los nodos hijos
var nodos = autoslujo.childNodes
var arr_lujo = []

for (let i = 0; i < nodos.length; i++) {
    console.log(nodos[i])

    if (nodos[i].nodeType == document.ELEMENT_NODE) {
        arr_lujo.push(nodos[i].textContent)
    }
} //Del for

document.getElementById("rpta1").innerHTML = arr_lujo; //El innerHTML es para reemplazar el section en el cual el id es rpta1 con el arreglo de lujo creado por nosotros


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

document.getElementById("rpta2").innerHTML = arr_comercial; 