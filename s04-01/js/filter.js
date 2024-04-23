//High order functions: Filter

function filtrar(arreglo, argumento){
    let rpta = []

    for (let elem of arreglo){
        if (elem % argumento == 0){
            rpta.push(elem)
        }
    }
    return rpta
}

const numero = [1,2,3,4,5,6,7,8,9,10]
rpta = filtrar(numero,2)
console.log("Los pares son: ",rpta)


//Usando High Order Filter
console.log("* * *Usando la función ES6* * *")
const pares = numero.filter(n =>{ //Por cada elemento del arreglo, 
    return n % 2 == 0
})
console.log(pares)