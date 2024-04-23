// Función map: genera una nueva matriz
//Genera u nnuevo arreglo modificado agregándole algunos elementos

function mapear (arreglo, argumento){
    let rpta = []
    for (let  elem of arreglo) {
        rpta.push(elem + " * " + argumento)
        
    }
    return rpta
}

const alumnos = ['Pepito', 'Carlitos', 'Luchito','Anita']
rpta = mapear(alumnos, "ASISTIO")
console.log(rpta)

//Usando ES6
const listado = alumnos.map (a => {
    return a + "* * ASISTIO A CLASES * *"
})
console.log(listado)