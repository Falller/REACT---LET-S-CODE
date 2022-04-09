class Jogador {
    constructor(nome, categoria, derrotas) {
        this.nome = nome,
        this.categoria = categoria
        this.derrotas = derrotas
    }

    perdeu_playboy() {
        this.derrotas += 1;
    }
}

module.exports = Jogador;