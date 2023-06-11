import FormaDePagamento from './FormadePagamento';

class Carrinho {
  private formaDePagamento!: FormaDePagamento;

  constructor(
    private id: number,
    private nomeCliente: string,
    public valorCompra: number = 0, // Valor inicial do carrinho é 0
    public IsPago: boolean = false, // Inicialmente, o carrinho não está pago
    private cupom: string = '', // Não há cupom aplicado inicialmente
    
  ) {}

  adicionarAoCarrinho(valorItem: number): void {
    // Adiciona o valor do item ao valor total do carrinho
    this.valorCompra += valorItem;
  }

  aplicarCupom(cupom: string): void {
    // Extrai o desconto do cupom
    const desconto = parseInt(cupom.replace(/\D/g,'')); // Remove todos os caracteres não numéricos

    if (isNaN(desconto)) {
      console.log('Cupom inválido');
      return;
    }

    // Calcula o novo valor da compra
    const valorDesconto = this.valorCompra * (desconto / 100);
    this.valorCompra -= valorDesconto;

    this.cupom = cupom;
    console.log(`Desconto de ${desconto}% aplicado. Novo valor: ${this.valorCompra}`);
  }

  processarPedido(): void {
    if (!this.formaDePagamento) {
      console.log("Forma de pagamento não definida");
      return;
    }

    const pagamentoFoiProcessado = this.formaDePagamento.processarPagamento(this.valorCompra);

    if (pagamentoFoiProcessado) {
      this.IsPago = true;
      console.log("Pedido processado com sucesso!");
      this.gerarNotaFiscal();
    } else {
      console.log("Falha no processamento do pedido");
    }
  }

  setFormaDePagamento(formaDePagamento: FormaDePagamento): void {
    this.formaDePagamento = formaDePagamento;
  }

  gerarNotaFiscal(): void {
    console.log('--- Nota Fiscal ---');
    console.log(`Nome: ${this.nomeCliente}`);
    console.log(`Valor: ${this.valorCompra}`);
    console.log(`Forma de Pagamento: 
    ${this.formaDePagamento.informacaoPagamento()}`);
    console.log('-------------------');
  }

}

export default Carrinho;