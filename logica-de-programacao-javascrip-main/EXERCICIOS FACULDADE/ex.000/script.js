var btnMais= document.querySelector("#mais")
var btnMenos = document.querySelector("#menos")
var res = document.querySelector("#res")
var contador = 0

function incremento (){
    contador ++
    res.innerText = contador
}
function decremento(){
    contador --
    res.innerText = contador
}
function limiter(){
    if (contador == 0){
        btnMenos.setAttribute("disabled", " ")
    }else{
        btnMenos.removeAttribute("disable","")
    }
}
limiter()
btnMais.addEventListener("click",incremento)
btnMenos.addEventListener("click",decremento)