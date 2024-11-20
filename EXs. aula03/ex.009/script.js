var numero = Number(prompt("o horario"))
if(numero >= 6 && numero <= 12){
    alert("horario da manhã")
}else if(numero > 12 && numero <= 18){
    alert("horario da tarde")
}else if(numero > 18 && numero <= 23){
    alert("horario da noite")
}else{
    alert("horario da Madrugada")
}
