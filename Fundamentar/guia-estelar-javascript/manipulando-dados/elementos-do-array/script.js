// Manipulando Strings e Números

// Contar elementos do Array


// pode ser colocado qualquer tipo de informação dentro de um Array, inlusive tipos

console.log(["a", {type: "array"}, function() {return "oie"}])
console.log(["a", {type: "array"}, function() {return "oie"}].length)

// Rodando a função dentro do Array
console.log(["a", {type: "array"}, function() {return "oie"}] [0])
console.log(["a", {type: "array"}, function() {return "oie"}] [1].type)
console.log(["a", {type: "array"}, function() {return "oie"}] [2]())

// Mostrando quantos elementos o Array tem de forma tratada
console.log("O Array tem " + ["a", {type: "array"}, function() {return "oie"}].length + " elementos")

