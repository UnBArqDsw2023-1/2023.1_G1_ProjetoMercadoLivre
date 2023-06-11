import { Categoria } from './Categoria';

export class Produto {

  private id: number
  private nome: string
  private descricao: string
  private preco: number
  private tamanho: number
  private peso: number
  private condicaoProduto: boolean
  private avaliacao: number
  private marca: string
  private disponibilidade: boolean
  private percentualDesconto: number
  private aceitaParcelamento: boolean
  private estoque: number
  private categoria: Categoria;
  private idsDeCategoria!: number[];

  constructor (id: number, nome: string, descricao: string, preco: number, tamanho: number, peso: number, condicaoProduto: boolean, avaliacao: number, marca: string, disponibilidade: boolean, percentualDesconto: number, aceitaParcelamento: boolean, estoque: number, categoria: Categoria) {
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

  public calcularDesconto(percentualDesconto: number): number {
    let desconto = (this.preco*percentualDesconto)/100;
    desconto = this.preco - desconto;
    return desconto;
  }

  public atualizarEstoque(estoque: number): number {
    return estoque++;
  }

  public getId(): number {
    return this.id;
  }

  public setId(id: number) {
    this.id = id;
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(nome: string) {
    this.nome = nome;
  }

  public getDescricao(): string {
    return this.descricao;
  }

  public setDescricao(value: string) {
    this.descricao = value;
  }

  public getPreco(): number {
    return this.preco;
  }

  public setPreco(preco: number) {
    this.preco = preco;
  }

  public getTamanho(): number {
    return this.tamanho;
  }

  public setTamanho(tamanho: number) {
    this.tamanho = tamanho;
  }

  public getPeso(): number {
    return this.peso;
  }

  public setPeso(peso: number) {
    this.peso = peso;
  }

  public getCondicaoProduto(): boolean {
    return this.condicaoProduto;
  }

  public setCondicaoProduto(condicaoProduto: boolean) {
    this.condicaoProduto = condicaoProduto;
  }

  public getAvaliacao(): number {
    return this.avaliacao;
  }

  public setAvaliacao(avaliacao: number) {
    this.avaliacao = avaliacao;
  }

  public getMarca(): string {
    return this.marca;
  }

  public setMarca(marca: string) {
    this.marca = marca;
  }

  public getDisponibilidade(): boolean {
    return this.disponibilidade;
  }

  public setDisponibilidade(disponibilidade: boolean) {
    this.disponibilidade = disponibilidade;
  }

  public getPercentualDesconto(): number {
    return this.percentualDesconto;
  }

  public setPercentualDesconto(percentualDesconto: number) {
    this.percentualDesconto = percentualDesconto;
  }

  public getAceitaParcelamento(): boolean {
    return this.aceitaParcelamento;
  }

  public setAceitaParcelamento(aceitaParcelamento: boolean) {
    this.aceitaParcelamento = aceitaParcelamento;
  }

  public getEstoque(): number {
    return this.estoque;
  }

  public setEstoque(estoque: number) {
    this.estoque = estoque;
  }  

  public getCategoria(): Categoria {
    return this.categoria;
  }

  public setCategoria(categoria: Categoria) {
    this.categoria = categoria;
  } 

  public getIdsDeCategoria(): number[] {
    return this.idsDeCategoria;
  }

  public contemCategoria(idCategoria: number): boolean {
    return this.idsDeCategoria.includes(idCategoria) ? true : false;
  } 

  public toString(): string {
    return `ID: ${this.id}, Nome: ${this.nome}, Descrição: ${this.descricao}, Preço: ${this.preco}, Tamanho: ${this.tamanho}, Peso: ${this.peso}, Condição: ${this.condicaoProduto}, Avaliação: ${this.avaliacao}, Marca: ${this.marca}, Disponibilidade: ${this.disponibilidade}, Desconto: ${this.percentualDesconto}, Parcelamento: ${this.aceitaParcelamento}, Estoque: ${this.estoque}, Categoria: ${this.categoria.getNome()}`;
  }
}