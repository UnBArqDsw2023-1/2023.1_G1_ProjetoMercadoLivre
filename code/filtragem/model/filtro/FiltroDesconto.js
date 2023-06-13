"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiltroDesconto = void 0;
const Filtro_1 = require("./Filtro");
class FiltroDesconto extends Filtro_1.Filtro {
    constructor(percentualMinimoDesconto) {
        super();
        this.percentualMinimoDesconto = percentualMinimoDesconto;
    }
    filtrar() {
        const produtos = this.dataBase.getProdutos();
        return produtos.filter((produto) => produto.getPercentualDesconto() >= this.percentualMinimoDesconto);
    }
}
exports.FiltroDesconto = FiltroDesconto;
