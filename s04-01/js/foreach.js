// Función ES6 de ForEach

const data = [2,4,6,8,10]

data.forEach( item => {
    console.log(item)
})

data.forEach( (item, index, valores) => {
    console.log(item, index, valores)
    console.log(`El número ${item} esta en posición ${index} en el arreglo ${valores}`)
})