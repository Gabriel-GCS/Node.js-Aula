try {
    const ListaDeProdutos = [
        "Pao",
        "Leite",
        "Cafe",
        "Laranja",
        "Macarrao",
        "Sabonete",
        "Detergente"
    ];
    
    const listaDeArgumentos = process.argv.slice(2);
    
    const ListaSolicitadosDisponiveis = ListaDeProdutos.filter(produto =>{
        return listaDeArgumentos.find(argumento => argumento === produto);
    })
    
    ListaSolicitadosDisponiveis.forEach(produto => console.log(`Este produto nos temos: ${produto}`));
    
    const ListaSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento =>{
        return !ListaDeProdutos.find(produto => produto === argumento);
    })
    
    ListaSolicitadosNaoDisponiveis.forEach(argumento => console.log(`Este produto nao temos: ${argumento}`));
    
    ListaSolicitadosDisponiveis.sort();
    console.log('Podutos disponiveis')
    ListaSolicitadosDisponiveis.forEach(produto => console.log(produto))
    
} catch (e) {
    console.log('Nao foi possivel executar o pedido de compra.')
}


