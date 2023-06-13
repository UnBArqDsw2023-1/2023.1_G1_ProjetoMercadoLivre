"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(id, nome, descricao, preco, tamanho, peso, condicaoProduto, avaliacao, marca, disponibilidade, percentualDesconto, aceitaParcelamento, estoque, categoria) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.tamanho = tamanho;
        this.peso = peso;
        this.condicaoProduto = condicaoProduto;
        this.avaliacao = avaliacao;
        this.marca = marca;
        this.disponibilidade = disponibilidade;
        this.percentualDesconto = percentualDesconto;
        this.aceitaParcelamento = aceitaParcelamento;
        this.estoque = estoque;
        this.categoria = categoria;
    }
    calcularDesconto(percentualDesconto) {
        let desconto = (this.preco * percentualDesconto) / 100;
        desconto = this.preco - desconto;
        return desconto;
    }
    atualizarEstoque(estoque) {
        return estoque++;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getDescricao() {
        return this.descricao;
    }
    setDescricao(value) {
        this.descricao = value;
    }
    getPreco() {
        return this.preco;
    }
    setPreco(preco) {
        this.preco = preco;
    }
    getTamanho() {
        return this.tamanho;
    }
    setTamanho(tamanho) {
        this.tamanho = tamanho;
    }
    getPeso() {
        return this.peso;
    }
    setPeso(peso) {
        this.peso = peso;
    }
    getCondicaoProduto() {
        return this.condicaoProduto;
    }
    setCondicaoProduto(condicaoProduto) {
        this.condicaoProduto = condicaoProduto;
    }
    getAvaliacao() {
        return this.avaliacao;
    }
    setAvaliacao(avaliacao) {
        this.avaliacao = avaliacao;
    }
    getMarca() {
        return this.marca;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    getDisponibilidade() {
        return this.disponibilidade;
    }
    setDisponibilidade(disponibilidade) {
        this.disponibilidade = disponibilidade;
    }
    getPercentualDesconto() {
        return this.percentualDesconto;
    }
    setPercentualDesconto(percentualDesconto) {
        this.percentualDesconto = percentualDesconto;
    }
    getAceitaParcelamento() {
        return this.aceitaParcelamento;
    }
    setAceitaParcelamento(aceitaParcelamento) {
        this.aceitaParcelamento = aceitaParcelamento;
    }
    getEstoque() {
        return this.estoque;
    }
    setEstoque(estoque) {
        this.estoque = estoque;
    }
    getCategoria() {
        return this.categoria;
    }
    setCategoria(categoria) {
        this.categoria = categoria;
    }
    toString() {
        return `ID: ${this.id}, Nome: ${this.nome}, Descrição: ${this.descricao}, Preço: ${this.preco}, Tamanho: ${this.tamanho}, Peso: ${this.peso}, Condição: ${this.condicaoProduto}, Avaliação: ${this.avaliacao}, Marca: ${this.marca}, Disponibilidade: ${this.disponibilidade}, Desconto: ${this.percentualDesconto}, Parcelamento: ${this.aceitaParcelamento}, Estoque: ${this.estoque}, Categoria: ${this.categoria.getNome()}`;
    }
}
exports.Produto = Produto;
