const somar = () =>{
    const x = Number(document.getElementById('valor1').value)
    const y = Number(document.getElementById('valor2').value)
    const resultado = document.getElementById('resultado')

    soma = x + y
    resultado.innerHTML = `Resultado: ${soma}`
}