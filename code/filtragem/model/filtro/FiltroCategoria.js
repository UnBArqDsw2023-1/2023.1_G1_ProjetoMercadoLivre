"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiltroCategoria = void 0;
const Filtro_1 = require("./Filtro");
class FiltroCategoria extends Filtro_1.Filtro {
    constructor(categoria) {
        super();
        this.categoria = categoria;
    }
    filtrar() {
        var _a;
        const categoriaSelecionada = this.dataBase.getCategorias().filter((categoria) => categoria.getNome() === this.categoria);
        const idCategoria = (_a = categoriaSelecionada[0]) === null || _a === void 0 ? void 0 : _a.getId();
        return this.dataBase.produtos.filter((produto) => produto.getCategoria().getId() === idCategoria);
    }
}
exports.FiltroCategoria = FiltroCategoria;
