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

// Armar mi propia estructura de nodos

var rpta = []
rpta.push("<ul>")
for (let i = 0; i < arr_comercial.length; i++) {
    rpta.push("<li>" + arr_comercial[i] + "</li>")
}

rpta.push("</ul>")
x = rpta.join(" ")
document.getElementById("rpta1").innerHTML = x