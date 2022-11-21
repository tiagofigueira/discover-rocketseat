// Manipulando Strings e Números

/*  Separe um texto que contém espaços, em um novo array onde
    cada texto é uma posição do array. Depois disso, transforme
    o array em um texto e onde eram espaços, coloque __
*/

let phrase = "Eu quero viver o amor";
let myArray = phrase.split(" ");
console.log("Separando o array por espaços: " + myArray);

let phrase2 = "Eu quero viver o amor";
let myArray2 = phrase2.split("o");
console.log("Separando o array pela letra O: " + myArray2);

let phraseWithUnderscore = myArray.join("_");
console.log("Utilização do join para juntar a frase com underscore: " + phraseWithUnderscore)
console.log("Utilização do join para juntar a frase com underscore e LowerCase: " + phraseWithUnderscore.toLowerCase())