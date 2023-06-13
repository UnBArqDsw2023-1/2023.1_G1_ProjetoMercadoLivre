"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaController = void 0;
const Data_1 = require("../Data");
const Categoria_1 = require("../model/Categoria");
class CategoriaController {
    constructor() {
        this.dataBase = Data_1.Data.getInstance();
    }
    cadastrar(nome, descricao) {
        let proxID = this.dataBase.categorias.length + 1;
        const categoria = new Categoria_1.Categoria(proxID, nome, descricao);
        if (this.dataBase.categorias.filter((ctg) => ctg.getNome() === nome).length > 0) {
            console.log("Essa categoria já existe!");
            return;
        }
        else {
            this.dataBase.categorias.push(categoria);
            console.log("Cadastrado com sucesso!");
            return;
        }
    }
    atualizar(categoria) {
        const indexCategoria = this.dataBase.categorias.findIndex((ctg) => ctg.getId() == categoria.getId());
        if (indexCategoria >= 0) {
            this.dataBase.categorias[indexCategoria] = categoria;
            console.log("Categoria atualizada com sucesso!");
            return;
        }
        console.log("Esta categoria não existe!");
    }
    buscarPorID(id) {
        const categoriaEncontrada = this.dataBase.categorias.find((categoria) => categoria.getId() == id);
        if (categoriaEncontrada) {
            console.log(categoriaEncontrada.toString());
            return;
        }
        console.log("Esta categoria não existe!");
    }
    buscarPorNome(nome) {
        const categoriaEncontrada = this.dataBase.categorias.find((categoria) => categoria.getNome() == nome);
        if (categoriaEncontrada) {
            console.log(categoriaEncontrada.toString());
            return;
        }
        console.log("Esta categoria não existe!");
    }
    remover(id) {
        const indexCategoria = this.dataBase.categorias.findIndex((categoria) => categoria.getId() == id);
        if (indexCategoria >= 0) {
            this.dataBase.categorias.splice(indexCategoria, 1);
            console.log("Categoria removida com sucesso!");
            return;
        }
        console.log("Esta categoria não existe!");
    }
    obterTodos() {
        this.dataBase.categorias.forEach((categoria) => {
            console.log(categoria.toString());
        });
    }
}
exports.CategoriaController = CategoriaController;
