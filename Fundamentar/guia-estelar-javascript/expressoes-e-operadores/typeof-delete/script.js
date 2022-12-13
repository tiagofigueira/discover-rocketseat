/*
 
    Operadores unários
    typeof
    delete

 */

const person = {
    name : 'Tiago',
    age : 28
}

console.log("Antes de deletar dados de person:")
console.log(person)
delete person.age

console.log("Depois de deletar dados de person:")
console.log(person)