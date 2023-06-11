import { Data } from "../Data";
import { Produto } from "../model/Produto";

// export class ProdutoController {

//     dataBase = Data.getInstance();

//     cadastrar (nome: string, descricao: string, preco: number, condicaoProduto: boolean, marca: string, disponibilidade: boolean, estoque: number): string {
//         let proxID = this.dataBase.produtos.length + 1;

//         const produto = new Produto(proxID, nome, descricao, preco, condicaoProduto, marca, disponibilidade, percentualDesconto, aceitaParcelamento, estoque);
//         this.dataBase.produtos.push(produto);

//         return "Produto Cadastrado com sucesso!";
//     }

//     atualizarProduto (produto: Produto): string {
//         produto.getId();
//         produto.setNome();

//         return "Produto Atualizado com sucesso!";
//     }

// }

class ProdutoController {
    private produtos: Produto;
  
    constructor() {
      let Id = 0, nome="zero";
      this.produtos = new Produto(Id, nome);
    }
  
    cadastrar(id: number, nome: string): string {
      const produto = new Produto(id, nome);
      return this.produtos.cadastrar(produto);
    }
  
    atualizar(id: number, nome: string): string {
      const produto = new Produto(id, nome);
      return this.produtos.atualizar(produto);
    }
  
    buscarPorId(id: number): Produto | undefined {
      return this.produtos.buscarPorId(id);
    }
  
    buscarPorNome(nome: string): Produto[] {
      return this.produtos.buscarPorNome(nome);
    }
  
    obterTodos(): Produto[] {
      return this.produtos.obterTodos();
    }
  
    remover(id: number): string {
      return this.produtos.remover(id);
    }
  }