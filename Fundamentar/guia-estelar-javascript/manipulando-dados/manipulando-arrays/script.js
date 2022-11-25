// Manipulando Arrays

let techs = ["html", "css", "js"]
console.log("Array original: " + techs)

// Adicionar um item no fim
techs.push("nodejs")

// Adcionar no começo
techs.unshift("sql")

// Remover do fim
// techs.pop()

// Remover do começo
// techs.shift()

// Pegar somente alguns elementos do Array
// console.log(techs.slice(1, 3))
// console.log(techs.slice(1, 2))

// Remover 1 ou mais itens em qualquer posição do Array
// techs.splice(1, 2)
// Encontrar a posição de um elemento no array

let index = techs.indexOf('css')
techs.splice(index, 1)

console.log(techs)