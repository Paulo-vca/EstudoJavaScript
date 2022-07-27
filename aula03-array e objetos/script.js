// o que sao vetores ou arrays

// como declarar um array-----------------
// let array = ['string', 1, true]
// console.log(array)

// pode guardar varios tipos de dados---------------------------
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']]
// console.log(array[2])

// forEach---------------------
// array.forEach(function(item, index){console.log(item, index)})

// push (adicionar qualquer dado novo)-----------
// array.push('novo item')
// console.log(array)

// pop (remove o ultimo item do array )---------------------------------
// array.pop()
// console.log(array)

// shift (remove o primeiro item do array)-----------------------
// array.shift()
// console.log(array)

// unshift (novo item no inicio)---------------------------------
// array.unshift('novo item no inicio')
// console.log(array)

// indexOf (retorna o indece de um valor)------------------------
// console.log(array.indexOf(true))

// splice (remove ou substitui um item pelo indice)----------------
// array.splice(0, 3)
// console.log(array)

// slice (retorna uma parte de uma array existente)----------
// let novoArray = array.slice(0, 3)
// console.log(novoArray)


//OBJETO
let object = {string: 'string', number:1, boolean:true, array: ['array'], objectInterno:{objectInterno: 'objeto interno'}}

// console.log(object.number)

// var string = object.string
// console.log(string)

// var arrayInterno = object.array
// console.log(arrayInterno)

var { string, boolean, objectInterno} = object
console.log(string,boolean, objectInterno)