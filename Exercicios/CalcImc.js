// Get altura em metros
const altura = 1.80
const peso = 70

const imc = (peso/(altura * altura)).toFixed(2)
console.log(`IMC: ${imc}`)

if(imc < 18.5){
    console.log('Baixo peso')
}else if(imc > 18.5 & imc < 24.9){
    console.log('Peso normal')
}else if(imc > 25 & imc < 29.9){
    console.log('Sobrepeso')
}else{
    console.log('Obesidade')
}