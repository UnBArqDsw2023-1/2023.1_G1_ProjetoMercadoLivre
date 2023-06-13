"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiltroMarca = void 0;
const Filtro_1 = require("./Filtro");
class FiltroMarca extends Filtro_1.Filtro {
    constructor(marca) {
        super();
        this.marca = marca;
    }
    filtrar() {
        const produtos = this.dataBase.getProdutos();
        return produtos.filter((produto) => produto.getMarca() === this.marca);
    }
}
exports.FiltroMarca = FiltroMarca;
