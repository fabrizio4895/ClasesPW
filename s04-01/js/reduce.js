// Función reducir

function reducir(arreglo, start){
    let suma = start
    for(let elem of arreglo){
        suma = suma + elem
    }
    return suma
}

const numeros = [1,2,3,4,5,6,7,8,9,10]
let rpta = reducir(numeros,0)
console.log(rpta)

//Usando ES6
total = 0
const suma2 = numeros.reduce( (total, elem) => {
    return total + elem
})
console.log(suma2)