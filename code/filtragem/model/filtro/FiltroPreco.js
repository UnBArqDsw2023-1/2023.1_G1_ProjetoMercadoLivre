"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiltroPreco = void 0;
const Filtro_1 = require("./Filtro");
class FiltroPreco extends Filtro_1.Filtro {
    constructor(precoMinimo, precoMaximo) {
        super();
        this.precoMinimo = precoMinimo;
        this.precoMaximo = precoMaximo;
    }
    filtrar() {
        const produtos = this.dataBase.getProdutos();
        return produtos.filter((produto) => produto.getPreco() >= this.precoMinimo && produto.getPreco() <= this.precoMaximo);
    }
}
exports.FiltroPreco = FiltroPreco;
