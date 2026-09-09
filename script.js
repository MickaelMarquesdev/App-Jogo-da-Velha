const tabuleiroEl = document.querySelector(".tabuleiro")
const statusEl = document.querySelector(".status")
const celulas = document.querySelectorAll(".celula")
const btnReiniciar = document.querySelector(".btn-reiniciar")

let tabuleiro = ["", "", "", "", "", "", "", "", ""]
let jogadorAtual = "X"
let jogoFinalizado = false

const combinacoesVencedoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


celulas.forEach(function (celula, indice) {
    celula.addEventListener("click", function() {
        if(tabuleiro[indice] !== "" || jogoFinalizado) {
            return
        }

        tabuleiro[indice] = jogadorAtual
        celula.textContent = jogadorAtual
        celula.classList.add(jogadorAtual === "X" ? "marcado-x" : "marcado-o")

    const resultado = verificarVencedor()

        if(resultado) {
            statusEl.textContent = `Jogador ${resultado.jogador} venceu! 🎉`
            jogoFinalizado = true

            resultado.combinacao.forEach(function(indice) {
            celulas[indice].classList.add("vencedora")
        })

        return
    }

        if(verificarEmpate()) {
            statusEl.textContent = `Empate! 🤝`
            jogoFinalizado = true
            return
        }

        jogadorAtual = jogadorAtual === "X" ? "O" : "X"
        statusEl.textContent = `Vez do jogador: ${jogadorAtual}`
    })
})



function verificarVencedor() {
    for (let i = 0; i < combinacoesVencedoras.length; i++) {
        const [a, b, c] = combinacoesVencedoras[i]

        if(tabuleiro[a] !== "" && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) {
            return { jogador: tabuleiro[a], combinacao: [a,b,c] }
        }
    }

    return null

    
}

function verificarEmpate() {
    return tabuleiro.every(function(posicao) {
        return posicao !== ""
    })
}

function reiniciarJogo() {
    tabuleiro = ["", "", "", "", "", "", "", "", ""]
    jogadorAtual = "X"
    jogoFinalizado = false

    celulas.forEach(function(celula) {
        celula.textContent = ""
        celula.classList.remove("marcado-x", "marcado-o", "vencedora")
    })

    statusEl.textContent = `Vez do Jogador: ${jogadorAtual}`
}

btnReiniciar.addEventListener("click", reiniciarJogo)