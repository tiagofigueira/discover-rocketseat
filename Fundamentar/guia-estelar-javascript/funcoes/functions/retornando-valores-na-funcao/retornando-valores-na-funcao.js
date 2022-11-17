//function expression
//function anonymous

//parâmetros (parameters)

/*
    function sem return apresenta resultados undefined como abaixo
    const sum = function(number1, number2) {
    console.log(number1 + number2)
    }

    let number1 = 34
    let number2 = 25

    console.log(` o número 1 é ${number1}`)
    console.log(` o número 2 é ${number2}`)
    console.log(` a soma é  ${sum(number1, number2)}`)

*/

let total = 0

const sum = function(number1, number2) {
    let total = number1 + number2;
    return total;
}

let number1 = 34
let number2 = 25

console.log(` o número 1 é ${number1}`)
console.log(` o número 2 é ${number2}`)
console.log(` a soma é  ${sum(number1, number2)}`)