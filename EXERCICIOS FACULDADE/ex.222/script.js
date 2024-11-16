var n1 = Number document.querySelector("#n1").value
var n2 = document.querySelector("#n2")

var btnSomar = document.querySelector("#soma")
var btnDivisao = document.querySelector("#divisao")
var btnMultiplicacao = document.querySelector("#multiplicacao")
var btnSubtracao = document.querySelector("#subtracao")
var res = document.querySelector("#res")

btnSomar.addEventListener("click",soma)
btnDivisao.addEventListener("click", dividir)
btnMultiplicacao.addEventListener("click",multiplicar)
btnSubtracao.addEventListener("click",subtrair)


function soma() {
    var numero1Convertido = Number(n1.value)
    var numero2Convertido = Number(n2.value)
    var soma = numero1Convertido + numero2Convertido
    res.innerText = soma
}

function dividir(){
    var numero1Convertido = Number(n1.value)
    var numero2Convertido = Number(n2.value)
    var dividir = numero1Convertido / numero2Convertido
    res.innerText = dividir
}
function multiplicar(){
    var numero1Convertido = Number(n1.value)
    var numero2Convertido = Number(n2.value)
    var multiplicar = numero1Convertido * numero2Convertido
    res.innerText = multiplicar
}
function subtrair(){
    var numero1Convertido = Number(n1.value)
    var numero2Convertido = Number(n2.value)
    var subtrair = numero1Convertido - numero2Convertido
    res.innerText = subtrair
}


