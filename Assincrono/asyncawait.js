comidasCasa = ['pizza', 'hamburguer','prato feito']

const pedido = (pedido) => {
    // resolve -> sucess || reject -> error
    return new Promise((resolve, reject) => {
        if (!comidasCasa.includes(pedido)) {
            return reject('Nao temos essa opcao')
        }

        setTimeout(() => {
            resolve(`Seu pedido: ${[pedido]}`)
        }, 2000);
    })
}

const reservarPedido = async () =>{
    try{
        console.log(await pedido('pizza'))
    }catch( erro ){
        console.log(erro)
    }
}

reservarPedido()
console.log('roda o resto do codigo...')