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

solicitacao = 'sorvete'

pedido(pedido)
    .then((res) => {
        console.log(res)
    }).catch((erro) => {
        console.log(erro)
    })