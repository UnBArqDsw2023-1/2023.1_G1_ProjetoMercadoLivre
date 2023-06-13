"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoController = void 0;
const FiltroCategoria_1 = require("../model/filtro/FiltroCategoria");
const FiltroAvaliacao_1 = require("../model/filtro/FiltroAvaliacao");
const FiltroMarca_1 = require("../model/filtro/FiltroMarca");
const FiltroDesconto_1 = require("../model/filtro/FiltroDesconto");
const FiltroPreco_1 = require("../model/filtro/FiltroPreco");
const Produto_1 = require("../model/Produto");
const Data_1 = require("../Data");
class ProdutoController {
    constructor() {
        this.dataBase = Data_1.Data.getInstance();
    }
    cadastrar(nome, descricao, preco, tamanho, peso, condicaoProduto, avaliacao, marca, disponibilidade, percentualDesconto, aceitaParcelamento, estoque, categoria) {
        let proxID = this.dataBase.produtos.length + 1;
        const produto = new Produto_1.Produto(proxID, nome, descricao, preco, tamanho, peso, condicaoProduto, avaliacao, marca, disponibilidade, percentualDesconto, aceitaParcelamento, estoque, categoria);
        this.dataBase.produtos.push(produto);
        console.log("Cadastrado com sucesso!");
    }
    atualizar(produto) {
        const indexProduto = this.dataBase.produtos.findIndex((p) => p.getId() == produto.getId());
        if (indexProduto >= 0) {
            this.dataBase.produtos[indexProduto] = produto;
            console.log("Produto atualizado com sucesso!");
            return;
        }
        console.log("Este produto não existe!");
    }
    buscarPorID(id) {
        const produtoEncontrado = this.dataBase.produtos.find((produto) => produto.getId() == id);
        if (produtoEncontrado) {
            console.log(produtoEncontrado.toString());
            return;
        }
        console.log("Esta produto não existe!");
    }
    buscarPorNome(nome) {
        const produtoEncontrada = this.dataBase.produtos.find((categoria) => categoria.getNome() == nome);
        if (produtoEncontrada) {
            console.log(produtoEncontrada.toString());
            return;
        }
        console.log("Este produto não existe!");
    }
    remover(id) {
        const indexProduto = this.dataBase.produtos.findIndex((produto) => produto.getId() == id);
        if (indexProduto >= 0) {
            this.dataBase.categorias.splice(indexProduto, 1);
            console.log("Produto removido com sucesso!");
            return;
        }
        console.log("Este produto não existe!");
    }
    obterTodos() {
        this.dataBase.produtos.forEach((produto) => {
            console.log(produto.toString());
        });
    }
    obterTodosMarca(marca) {
        let produtosFiltrados = new FiltroMarca_1.FiltroMarca(marca).filtrar();
        produtosFiltrados.forEach((produto) => {
            console.log(produto.toString());
        });
    }
    obterTodosCategoria(categoria) {
        let produtosFiltrados = new FiltroCategoria_1.FiltroCategoria(categoria).filtrar();
        console.log("produtosFiltrados(ProdutoController): ", produtosFiltrados);
        2;
        produtosFiltrados.forEach((produto) => {
            console.log(produto.toString());
        });
    }
    obterTodosAvaliacao(avaliacaoMinima) {
        let produtosFiltrados = new FiltroAvaliacao_1.FiltroAvaliacao(avaliacaoMinima).filtrar();
        produtosFiltrados.forEach((produto) => {
            console.log(produto.toString());
        });
    }
    obterTodosDesconto(descontoMinimo) {
        let produtosFiltrados = new FiltroDesconto_1.FiltroDesconto(descontoMinimo).filtrar();
        produtosFiltrados.forEach((produto) => {
            console.log(produto.toString());
        });
    }
    obterTodosPreco(precoMinimo, precoMaximo) {
        let produtosFiltrados = new FiltroPreco_1.FiltroPreco(precoMinimo, precoMaximo).filtrar();
        produtosFiltrados.forEach((produto) => {
            console.log(produto.toString());
        });
    }
}
exports.ProdutoController = ProdutoController;
