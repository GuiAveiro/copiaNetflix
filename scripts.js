let botaoPergunta = document.getElementById("botao-perg")
let menuPergunta = document.getElementById("pergunta")
let imgPergunta = document.getElementById("img-pergunta")

function mostrarMenu() {
    if (menuPergunta.style.display == "block") {
        menuPergunta.style.display = "none"
        imgPergunta.id = "img-pergunta"
    } else {
        menuPergunta.style.display = "block"
        imgPergunta.id = "img-pergunta-girar"
    }


}




botaoPergunta.addEventListener("click", mostrarMenu)