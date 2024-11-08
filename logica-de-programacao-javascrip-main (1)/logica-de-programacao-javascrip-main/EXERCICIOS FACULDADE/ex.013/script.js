var peso = Number(prompt("Seu peso:"))
var altura = Number(prompt("Sua altura:"))

var imc = peso / altura ** altura
if(peso < 18.5){
    alert("Abaixo do peso")
}else if (imc > 18.5 && imc < 24.9){
    alert("peso normal")
} else {
    alert("obesidade")

}