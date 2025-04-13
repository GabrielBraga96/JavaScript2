/*
    textContent -> Pega todo o conteudo
    innerText -> Pega apenas o TEXTO
    innerHTML -> Permite adicionar HTML e texto
*/

const element = document.querySelector(".paragraph-js")

element.innerHTML = "ALTERADO TEXTO HTML PELO JS"

console.log(element.textContent) // SÓ HTML
console.log(element.innerText)   // LEVA EM CONTA O CSS
console.log(element.innerHTML)   // TRÁS TUDO (permite adicionar HTML)