# ⭕ Jogo da Velha

Clássico jogo da velha (Tic-Tac-Toe) para dois jogadores, desenvolvido em JavaScript puro como projeto prático de fixação de lógica de programação, dentro dos estudos da trilha Full-Stack da Rocketseat.

## ✨ Funcionalidades

- 🎮 **Dois jogadores no mesmo dispositivo** — alternância automática de turno entre X e O
- 🏆 **Detecção de vitória** — verifica as 8 combinações possíveis (linhas, colunas e diagonais) a cada jogada
- 🤝 **Detecção de empate** — identifica quando o tabuleiro é preenchido sem vencedor
- 🔄 **Reiniciar partida** — volta o jogo ao estado inicial sem precisar recarregar a página
- 🎨 **Feedback visual**:
  - Cores diferentes para X e O
  - Animação de entrada ao marcar uma célula
  - Destaque na combinação vencedora
  - Efeito de hover em células ainda disponíveis

## 🛠️ Tecnologias

- **HTML5** — estrutura semântica da página
- **CSS3** — CSS Grid para o tabuleiro, `@keyframes` para animações, pseudo-classes e seletores combinados (`:not()`)
- **JavaScript (Vanilla)** — toda a lógica do jogo, sem uso de frameworks ou bibliotecas

## 🚀 Como executar o projeto

Não é necessário nenhuma instalação — é um projeto 100% front-end estático.

1. Clone o repositório:
   ```bash
   git clone https://github.com/MickaelMarquesdev/jogo-da-velha.git
   ```
2. Entre na pasta do projeto:
   ```bash
   cd jogo-da-velha
   ```
3. Abra o arquivo `index.html` diretamente no navegador, ou utilize uma extensão como o **Live Server** (VS Code).

## 📁 Estrutura do projeto

```
jogo-da-velha/
├── index.html      # Estrutura da página (tabuleiro, status, botão de reiniciar)
├── style.css        # Estilização (grid, cores, animações)
└── script.js        # Lógica do jogo (estado, turnos, vitória, empate)
```

## 🧠 Principais conceitos aplicados

- CSS Grid para organização bidimensional do tabuleiro
- Manipulação do DOM e eventos (`addEventListener`, `classList`)
- Loop `for` clássico com retorno antecipado
- Destructuring de arrays
- Métodos de array de alta ordem: `forEach`, `every`
- Controle de estado da aplicação (turno atual, fim de jogo)
- Animações CSS com `@keyframes` e `transition`

## 📌 Sobre o projeto

Este projeto foi desenvolvido para fins de estudo e prática de lógica de programação em JavaScript, como parte de um ciclo de projetos práticos complementares à formação Full-Stack da [Rocketseat](https://www.rocketseat.com.br/).

---

Feito com ⭕❌ por Mickael Marques
