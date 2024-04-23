//Dos formas para declarar objetos
//Constructor de objetos
let obj1 = new Object()
//Literal
let obj2 = {}

let alumno = {
    codigo: 20193972,
    nombre: "Fabrizio"
}

//Referenciar los atributos
v1 = alumno.codigo
console.log(v1)

alumno.ciclo = "2024-1"
console.log = ( alumno )

//Eliminar un atributo
delete alumno.ciclo
console.log(alumno)

//Caso especial: el atributo es de varias palabras
alumno['veces en el curso']= 4
console.log(alumno)

//Preguntar si el atributo existe
console.log('ciclo' in alumno)
console.log('codigo' in alumno)

//Convertir el objeto a cadena
console.log(alumno.toString())

//Recorrer el objeto y sus atributos

