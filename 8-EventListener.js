
const input = document.querySelector("#main-input")
const displayText = document.querySelector("#display-text")

function cliqueiNoBotao() {
    const inputValue = input.value;
    displayText.innerHTML = inputValue;
}

const button = document.querySelector(".main-button");
button.addEventListener("click", cliqueiNoBotao);