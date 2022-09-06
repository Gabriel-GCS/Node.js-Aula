const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const QualquerCoisa = 'qualquer coisa';
console.log(QualquerCoisa);

let leituraDeCampo;

readLine.question('Ensira seu nome: ', input => {
    leituraDeCampo = input;
    console.log(`o nome é: ${leituraDeCampo}`);
});