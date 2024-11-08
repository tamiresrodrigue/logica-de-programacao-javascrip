var horario = Number(prompt("Digite um horário:"))

if(horario >=5 && horario <= 11){
    alert("manhã")
}else if(horario >=12 && horario <=17){
    alert("Tarde")
}else if(horario >=18 && horario <=23){
    alert("Noite")
}else{
    alert("Madrigada")
}