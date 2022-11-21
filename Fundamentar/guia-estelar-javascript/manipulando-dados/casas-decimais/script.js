// Manipulando Strings e números

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let number = 345.33452345
console.log("Este é o número original: " +number)

console.log("Este é o número em String: " +Number(number.toFixed(2).replace(".", ",")))
//Retornan NaN porque as vírgulas não fazem parte de númerais
// Passando para Number() ele retorna a ser número

console.log("Aqui abaixo segue um número: ")
console.log( +Number(number.toFixed(2)))

//Somente number.toFixed(2) é possível realizar manipulações de String