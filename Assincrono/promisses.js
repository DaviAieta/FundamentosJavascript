comidasCasa = ['pizza', 'hamburguer','prato feito']

const pedidoLogic = (pedido) => {
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

pedido = 'pizza'

pedidoLogic(pedido)
    .then((res) => {
        console.log(res)
    }).catch((erro) => {
        console.log(erro)
    })