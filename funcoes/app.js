const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});
const ValidarNumero = (numero) => {
        const resultado = Number.parseFloat(numero);
        if(!resultado){
            console.log('Numero invalido');
        }
        return resultado;
}
const ValidarOperador = (operador) =>{
    switch(operador){
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            return operador;
        default:
            console.log('Operador invalido');
            return null;
    }
}
readLine.question('Informar um numero: ', (numero1) => {
    const n1 = ValidarNumero(numero1);
    if(n1){
        readLine.question('Informar outro numero: ', (numero2) =>{
            const n2 = ValidarNumero(numero2);
            if(n2){
                readLine.question('Qual operacao? ', (operador) =>{
                    const operadorValidado = ValidarOperador(operador);
                    if(operadorValidado){
                        switch(operadorValidado){
                            case '+':
                                console.log(`${n1} + ${n2}: ${n1+n2}`)
                                break;
                            case '-':
                                console.log(`${n1} - ${n2}: ${n1-n2}`)
                                break;
                            case '*':
                                console.log(`${n1} * ${n2}: ${n1*n2}`)
                                break;
                            case '/':
                                console.log(`${n1} / ${n2}: ${n1/n2}`)
                                break;
                            case '%':
                                console.log(`${n1} % ${n2}: ${n1%n2}`)
                                break;
                            default: break;
                        }
                    }
                })
            }
        });
    }
})