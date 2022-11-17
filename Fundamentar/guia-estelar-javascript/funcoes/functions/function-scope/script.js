// function scope

let subject = 'create video';

function createThink(subject) {
    subject = 'study';
    return subject
}

console.log(createThink(subject));
console.log(subject)

/* 
    Se removermos o parâmetro da função createThink 
    ele irá pegar o subject do escopo acima que é da linha 18
*/

let subject1 = 'create video';

function createThink1() {
    subject1 = 'study';
    return subject1
}

console.log(createThink1(subject1));
console.log(subject1)

/* 
    a remoção de retorno e de atribuição da variável trará
    outros resultados 
*/

let subject2 

function createThink2() {
    subject2 = 'study';
}

console.log(subject2)
createThink2();
console.log(subject2)