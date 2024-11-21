var preco = Number(prompt("Digite o preço do seu produto:"))
if (preco <= 20){
    alert("Barato")
}else if (preco > 20 && preco <=100){
    alert("Médio")
}else{
    alert("Caro")
}