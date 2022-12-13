/* 

    new

    * left-hand-side expression
    * criar um novo objeto

*/

let name = new String('Tiago')
name.SurName = "Gonçalves"
let age = new Number(28)
console.log(name, age)
console.log(name.SurName, age)

let date = new Date('2022-12-12')
console.log(date.__proto__)