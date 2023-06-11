 export class Produto{
   cadastrar(produto: Produto): string {
     throw new Error("Method not implemented.")
   }
   atualizar(produto: Produto): string {
     throw new Error("Method not implemented.")
   }
   buscarPorId(id: number): Produto | undefined {
     throw new Error("Method not implemented.")
   }
   buscarPorNome(nome: string): Produto[] {
     throw new Error("Method not implemented.")
   }
   obterTodos(): Produto[] {
     throw new Error("Method not implemented.")
   }
   remover(id: number): string {
     throw new Error("Method not implemented.")
   }

     protected id: number
     protected nome: string
     protected descricao: string
     protected preco: number
     protected tamanho: number
     protected peso: number
     protected condicaoProduto: boolean
     protected avaliacao: number
     protected marca: string
     protected disponibilidade: boolean
     protected percentualDesconto: number
     protected aceitaParcelamento: boolean
     protected estoque: number

     constructor (id: number, nome: string, descricao: string, preco: number, condicaoProduto: boolean, avaliacao: number, marca: string, disponibilidade: boolean, percentualDesconto: number, aceitaParcelamento: boolean, estoque: number) {
         this.id = id;
         this.nome = nome;
         this.descricao = descricao;
         this.preco = preco;
         this.condicaoProduto = condicaoProduto;
         this.avaliacao = avaliacao;
         this.marca = marca;
         this.disponibilidade = disponibilidade;
         this.percentualDesconto = percentualDesconto;
         this.aceitaParcelamento = aceitaParcelamento;
         this.estoque = estoque;
     }

    //  public setProduto(produto: Produto): void{
    //      this.produto = produto;
    //  }

    //  public getId(): number {
    //      return this.id;
    //  }

    //  public setId(id: number): void {
    //      this.id = id;
    //  }

    //  public getNome(): string {
    //      return this.nome;
    //  }

    //  public setNome(nome: string): void {
    //      this.nome = nome;
    //  }

    //  public getDescricao(): string {
    //      return this.descricao;
    //  }

    //  public setDescricao(descricao: string): void {
    //      this.descricao = descricao;
    //  }

      public getPreco(): number {
          return this.preco;
      }

    //  public setPreco(preco: number): void {
    //      this.preco = preco;
    //  }

    public getAvaliacao(): number {
      return this.avaliacao;
    }

//  public setAvaliacao(avaliacao: number): void {
//      this.avaliacao = avaliacao;
//  }
    
      public getMarca(): string {
          return this.marca;
      }

    //  public setMarca(marca: string): void {
    //      this.marca = marca;
    //  }

    //  public getCondicaoProduto(): boolean {
    //      return this.condicaoProduto;
    //  }

    //  public setCondicaoProduto(condicaoProduto: boolean): void {
    //      this.condicaoProduto = condicaoProduto;
    //  }

    // public getDisponibilidade(): boolean {
    //      return this.disponibilidade;
    //  }

    //  public setDisponibilidade(disponibilidade: boolean): void {
    //      this.disponibilidade = disponibilidade;
    //  }

     public getPercentualDesconto(): number {
          return this.percentualDesconto;
      }

    //  public setPercentualDesconto(percentualDesconto: number): void {
    //      this.percentualDesconto = percentualDesconto;
    //  }

    // public getAceitaParcelamento(): boolean {
    //      return this.aceitaParcelamento;
    //  }

    //  public setAceitaParcelamento(aceitaParcelamento: boolean): void {
    //      this.aceitaParcelamento = aceitaParcelamento;
    //  }

    //  public getEstoque(): number {
    //      return this.estoque;
    //  }

    //  public setEstoque(estoque: number): void {
    //      this.estoque = estoque;
    //  }

     public calcularDesconto(preco: number, percentualDesconto: number, aceitaParcelamento: boolean): number {
         let desconto = (preco*percentualDesconto)/100;
         desconto = preco - desconto;
         return desconto;
     }

     public atualizarEstoque(estoque: number): number {
         return estoque++;
     }
}

// export class Produto {
//     constructor(public id: number, public nome: string) {}

//     private produtos: Produto[] = [];
  
//     cadastrar(produto: Produto): string {
//       this.produtos.push(produto);
//       return `Produto ${produto.id} cadastrado com sucesso.`;
//     }
  
//     atualizar(produto: Produto): string {
//       const index = this.produtos.findIndex((p) => p.id === produto.id);
//       if (index !== -1) {
//         this.produtos[index] = produto;
//         return `Produto ${produto.id} atualizado com sucesso.`;
//       }
//       return `Produto ${produto.id} não encontrado.`;
//     }
  
//     buscarPorId(id: number): Produto | undefined {
//       return this.produtos.find((produto) => produto.id === id);
//     }
  
//     buscarPorNome(nome: string): Produto[] {
//       return this.produtos.filter((produto) => produto.nome === nome);
//     }
  
//     obterTodos(): Produto[] {
//       return this.produtos;
//     }
  
//     remover(id: number): string {
//       const index = this.produtos.findIndex((produto) => produto.id === id);
//       if (index !== -1) {
//         this.produtos.splice(index, 1);
//         return `Produto ${id} removido com sucesso.`;
//       }
//       return `Produto ${id} não encontrado.`;
//     }
// }