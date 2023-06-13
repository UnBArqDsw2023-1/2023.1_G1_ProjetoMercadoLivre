"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filtro = void 0;
const Data_1 = require("../../Data");
class Filtro {
    constructor() {
        this.dataBase = Data_1.Data.getInstance();
    }
    filtrar() {
        const produtos = this.dataBase.getProdutos();
        return produtos;
    }
}
exports.Filtro = Filtro;
