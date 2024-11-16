var primeiraIdade = Number(prompt("Digite a primeira idade:"))
var segundaIdade = Number (prompt("Digite a segunda idade:"))

if(primeiraIdade == segundaIdade){
    alert("Os dois usuarios tem a mesma idade")
}else if (primeiraIdade > segundaIdade){
    alert("O primeiro usuario é mais velho")
}else{
    alert("O segundo usuario é mais velho")
}