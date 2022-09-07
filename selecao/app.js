const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Este programa vai checar se vc tem mais de 18 anos, e se tem habilitação para entrar no kart.');
console.log('e verificar se esta cadastrado no horario.');

readLine.question('Quantos anos vc tem?', ano =>{

    //ano > 18 ? console.log('Voce é maior de idade.') : console.log('Voce é menor de idade.');

    if(ano > 18){
        readLine.question('Voce tem habilitacao? (Sim/Nao)', habilitacao => {
            if(habilitacao.toLocaleUpperCase() === 'SIM'){
                readLine.question('Qual seu nome?', nome =>{
                    switch(nome){
                        case 'Gabriel':
                            console.log(`Voce tem acesso ao kart ${nome}.`);
                            break;
                        case 'Danilo':
                            console.log(`Voce tem acesso ao kart ${nome}.`);
                            break;
                        default:
                            console.log('Seu nome não esta na lista.');
                    }
                })
            }
            else{
                console.log('Voce n tem habilitação, não pode acessar o kart.');
            }
        })
    }
    else{
        console.log('Voce é de menor, não pode acessar o kart.');
    }
})