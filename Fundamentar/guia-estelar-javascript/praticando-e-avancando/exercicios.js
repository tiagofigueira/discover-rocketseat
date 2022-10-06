/**
    1. Declare uma variável de nome weight
 */
//let weight

/**
    2. Que tipo de dado é a variável acima?
    R: int
 */
//console.log(typeof weight)
/**
    3. Declare uma variável e atribua valores pra cada um dos dados:
        * name : String
        * age : number (Integer)
        * stars : Number (float)
        * isSubscribed : Boolean
*/
// let name = Tiago
// let age = 28
// let stars = 4.5 
// let isSubscribed = false

/**  
    4. A variável Studend abaixo é de que tipo de dados?
*/
let student = {};

console.log(typeof student)
/**
    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
*/
student = {
    name : 'Tiago',
    age : 28,
    stars : 4.5, 
    isSubscribed : false,
    weight : 100
};

Mariana = {
    name : 'Mariana',
    age : 25,
    stars : 10.10, 
    isSubscribed : true,
    weight : 65
};
/**
    4.2 Mostre no console a seguinte mensagem:
        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name> <age> e <weight> pelos
        valores de cada propriedade do objeto
*/
    console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)
/**
    5. Declare uma variável do tipo Array, de nome Students e atribua a ela nenhum valor,
    ou seja, somente o Array vazio
*/
    let students = []
/**
    6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student 
    da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/
    students = [
        student,
        Mariana
    ]

    console.log(students)
/**
    7. Coloque no console o valor da posição zero do Array acima
*/
    console.log(students[0])
/**
    8. Crie um novo student e coloque na posição 1 do Array students
*/
    students[1] = {
        Mariana
    }
    console.log(students[1])
/**
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que? 
    Após sua resposta, rode o código e veja se acertou.

    console.log(a)
    var a = 1

    undefined
*/
console.log(a)
    var a = 1

