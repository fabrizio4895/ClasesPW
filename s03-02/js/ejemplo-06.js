function agregarFinal(){
    // PASO 0: Recuperar el valor digitado
    let valor = document.getElementById("marmod").value // el .value poara obtener el valor digitado

    // PASO 1: Crear nodo
    let nodoNuevo = document.createElement("li") // Crear un elemento/etiqueta tipo li

    //PASO 2: Asignar valores al nodo
    nodoNuevo.id = "A-1"
    nodoNuevo.textContent = valor //El contenido de nodoNuevo tendrá el valor digitado en el formulario
    nodoNuevo.classList.add("agregado")

    //PASO 3: Agregar el nodo al árbol
    var referencia = document.getElementById("comercial")
    referencia.appendChild(nodoNuevo)
}


function agregarAntes(){
    // PASO 0: Recuperar el valor digitado
    let valor = document.getElementById("marmod").value // el .value poara obtener el valor digitado

    // PASO 1: Crear nodo
    let nodoNuevo = document.createElement("li") // Crear un elemento/etiqueta tipo li

    //PASO 2: Asignar valores al nodo
    nodoNuevo.id = "A-1"
    nodoNuevo.textContent = valor //El contenido de nodoNuevo tendrá el valor digitado en el formulario
    nodoNuevo.classList.add("agregado")

    //PASO 3: Agregar el nodo al árbol
    var referencia = document.getElementById("comercial")
    var referencia2 = document.getElementById("F")
    referencia.insertBefore(nodoNuevo, referencia2) //referencia apunta al inicio del arreglo, nodoNuevo es el nodo que se quiere insertar y referencia2 es el punto de referencia que indica que se debe insertar antes de él.

}

function reemplazar(){
    // PASO 0: Recuperar el valor digitado
    let valor = document.getElementById("marmod").value // el .value poara obtener el valor digitado

    // PASO 1: Crear nodo
    let nodoNuevo = document.createElement("li") // Crear un elemento/etiqueta tipo li

    //PASO 2: Asignar valores al nodo
    nodoNuevo.id = "F"
    nodoNuevo.textContent = valor //El contenido de nodoNuevo tendrá el valor digitado en el formulario
    nodoNuevo.classList.add("agregado")

    //PASO 3: Agregar el nodo al árbol
    var referencia = document.getElementById("comercial")
    var referencia2 = document.getElementById("F")
    referencia.replaceChild(nodoNuevo, referencia2)
}

function eliminar(){
    var referencia = document.getElementById("comercial")
    var referencia2 = document.getElementById("F")
    referencia.removeChild(referencia2)
}