// pegando as informações que digitou assim que rodou o programa
const listaArgumentos = process.argv.slice(2);

console.log('------ Executando um For -------')

for(let aux = 0; aux < listaArgumentos.length; aux++){
    console.log(`Posicao ${aux} valor lido: ${listaArgumentos[aux]}`);
}

console.log('------ Executando um While -------')

let auxWhile = 0;

while(auxWhile < listaArgumentos.length){
    console.log(`Posicao ${auxWhile} valor lido: ${listaArgumentos[auxWhile]}`);
    auxWhile++;
}

console.log('------ Executando um Do While -------')

let auxDoWhile = 0;
do{
    console.log(`Posicao ${auxDoWhile} valor lido: ${listaArgumentos[auxDoWhile]}`);
    auxDoWhile ++;
}while(auxDoWhile < listaArgumentos.length)

console.log('------ Executando um For of -------')

let auxForOf = 0;
for(const argumento of listaArgumentos){
    console.log(`Posicao ${auxForOf} valor lido: ${argumento}`);
    auxForOf ++;
}