"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
class Data {
    constructor() {
        this.categorias = [];
        this.produtos = [];
    }
    static getInstance() {
        if (!Data._instance) {
            Data._instance = new Data();
        }
        return Data._instance;
    }
    getCategorias() {
        return this.categorias;
    }
    getProdutos() {
        return this.produtos;
    }
}
exports.Data = Data;
