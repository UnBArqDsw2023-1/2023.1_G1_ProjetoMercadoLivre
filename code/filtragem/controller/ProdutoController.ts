import { FiltroCategoria } from "../model/filtro/FiltroCategoria";
import { FiltroAvaliacao } from '../model/filtro/FiltroAvaliacao';
import { FiltroMarca } from '../model/filtro/FiltroMarca';
import { FiltroDesconto } from '../model/filtro/FiltroDesconto';
import { FiltroPreco } from '../model/filtro/FiltroPreco';
import { Categoria } from './../model/Categoria';
import { Produto } from "../model/Produto";
import { Data } from "../Data";

export class ProdutoController {

  dataBase = Data.getInstance();
  
  cadastrar(nome: string, descricao: string, preco: number, tamanho: number, peso: number, condicaoProduto: boolean, avaliacao: number, marca: string, disponibilidade: boolean, percentualDesconto: number, aceitaParcelamento: boolean, estoque: number, categoria: Categoria): void {
    let proxID = this.dataBase.produtos.length + 1;

    const produto = new Produto(proxID, nome, descricao, preco, tamanho, peso, condicaoProduto, avaliacao, marca, disponibilidade, percentualDesconto, aceitaParcelamento, estoque, categoria);
    this.dataBase.produtos.push(produto);
    console.log("Cadastrado com sucesso!");
  }
  
  atualizar(produto: Produto): void {
    const indexProduto = this.dataBase.produtos.findIndex((p) => p.getId() == produto.getId())
    if(indexProduto >= 0) {
        this.dataBase.produtos[indexProduto] = produto;
        console.log("Produto atualizado com sucesso!");
        return;
    }
    console.log("Este produto não existe!");
  }

  buscarPorID(id: number): void {
    const produtoEncontrado = this.dataBase.produtos.find((produto) => produto.getId() == id);
    if(produtoEncontrado) {
        console.log(produtoEncontrado.toString());
        return;
    }
    console.log("Esta produto não existe!"); 
  }

  buscarPorNome(nome: string): void {
    const produtoEncontrada = this.dataBase.produtos.find((categoria) => categoria.getNome() == nome);
    if(produtoEncontrada) {
        console.log(produtoEncontrada.toString());
        return;
    }
    console.log("Este produto não existe!"); 
  }

  remover(id: number): void {
    const indexProduto = this.dataBase.produtos.findIndex((produto) => produto.getId() == id)
    if(indexProduto >= 0){
        this.dataBase.categorias.splice(indexProduto, 1);
        console.log("Produto removido com sucesso!");
        return;
    }
    console.log("Este produto não existe!");
  }

  obterTodos(): void {
    this.dataBase.produtos.forEach((produto) => {
      console.log(produto.toString());
    });
  }

  obterTodosMarca(marca: string): void {
      let produtosFiltrados: Produto[] = new FiltroMarca(marca).filtrar();
  
      produtosFiltrados.forEach((produto) => {
        console.log(produto.toString());
      });
  }

  obterTodosCategoria(categoria: string): void {
    let produtosFiltrados: Produto[] = new FiltroCategoria(categoria).filtrar();
    console.log("produtosFiltrados(ProdutoController): ", produtosFiltrados);2

    produtosFiltrados.forEach((produto) => {
      console.log(produto.toString());
    });
  }

  obterTodosAvaliacao(avaliacaoMinima: number): void {
    let produtosFiltrados: Produto[] = new FiltroAvaliacao(avaliacaoMinima).filtrar();

    produtosFiltrados.forEach((produto) => {
      console.log(produto.toString());
    });
  }

  obterTodosDesconto(descontoMinimo: number): void {
    let produtosFiltrados: Produto[] = new FiltroDesconto(descontoMinimo).filtrar();
    
    produtosFiltrados.forEach((produto) => {
      console.log(produto.toString());
    });
  }

  obterTodosPreco(precoMinimo: number, precoMaximo: number): void {
    let produtosFiltrados: Produto[] = new FiltroPreco(precoMinimo, precoMaximo).filtrar();

    produtosFiltrados.forEach((produto) => {
      console.log(produto.toString());
    });
  }
}