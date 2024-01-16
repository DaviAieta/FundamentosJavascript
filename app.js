const somar = () =>{
     const x = Number(document.getElementById('x').value)
     const y = Number(document.getElementById('y').value)
     const resultado = document.getElementById('resultado')

     const soma = x + y

     resultado.innerHTML = `Resultado: ${soma}`
}