"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiltroAvaliacao = void 0;
const Filtro_1 = require("./Filtro");
class FiltroAvaliacao extends Filtro_1.Filtro {
    constructor(avaliacaoMinima) {
        super();
        this.avaliacaoMinima = avaliacaoMinima;
    }
    filtrar() {
        const produtos = this.dataBase.getProdutos();
        return produtos.filter((produto) => produto.getAvaliacao() >= this.avaliacaoMinima);
    }
}
exports.FiltroAvaliacao = FiltroAvaliacao;
