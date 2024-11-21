var nota1 = Number(prompt("Digite sua primeira nota:"))
var nota2 = Number(prompt("Digite sua segunda nota:"))
var nota3 = Number(prompt("Digite sua terceira nota:"))

media = nota1 + nota2 + nota3 / 3

if (media >= 6){
    alert("APROVADO")
}else{
    alert("REPROVADO")
}
