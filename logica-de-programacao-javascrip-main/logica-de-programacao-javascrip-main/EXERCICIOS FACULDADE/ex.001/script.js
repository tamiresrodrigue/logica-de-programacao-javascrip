var ValorNumerico = Number(prompt("Digite um valor:"))

alert (`O valor formatado = ${ValorNumerico.toLocaleString("pt-br",{style: "currency", currency:"BRL"})}`)