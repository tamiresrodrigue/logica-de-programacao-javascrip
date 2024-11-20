var numero = Number(prompt("valor da compra"))
var desconto = prompt("codigo de desconto")
var resultado = (numero -(numero/100*10))
 if(desconto == "desc10"){
    alert(`o valor da compra com desconto é de ${resultado}`)

 }else{
    alert(`cumpom invalido`)
    alert(`valor da compra de ${numero}`)
 }
