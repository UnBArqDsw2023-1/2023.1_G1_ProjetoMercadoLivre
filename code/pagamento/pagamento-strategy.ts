interface FormaDePagamento {
  processarPagamento(valor: number): boolean;
  informacaoPagamento(): string;
}

class PagamentoCartaoCredito implements FormaDePagamento {
  private dataAtual = new Date();

  constructor(
    private nomeTitular: string,
    private CPF: string,
    private numeroCartao: number,
    private CVV: number,
    private dataDeVencimento: Date,
  ) {}

  processarPagamento(valor: number): boolean {
    if (
      this.nomeTitular !== '' &&
      this.numeroCartao !== null && this.numeroCartao.toString().length === 16 && 
      this.CVV.toString().length === 3 && this.CVV !== null &&
      this.dataDeVencimento > this.dataAtual
    ) {
      console.log(`Processando pagamento via cartão de crédito no valor de ${valor}`);
      return true;
    } else {
      console.log('Pagamento via cartão de crédito falhou.');
      return false;
    }
  }

  informacaoPagamento(): string {
    return `Cartão de Crédito:
      Titular: ${this.nomeTitular}
      CPF: ${this.CPF}
      Numero do Cartão: ${this.numeroCartao}
      Data: ${this.dataDeVencimento}
      CVV: ${this.CVV}`;

  }
}

class PagamentoBoleto implements FormaDePagamento {
  private dataAtual = new Date();
  private numeroCodigoDeBarras: string;

  constructor(
    private numeroBoleto: number,
    private dataDeVencimento: Date,) {
    this.numeroCodigoDeBarras = this.gerarCodigoDeBarras();
  }

  processarPagamento(valor: number): boolean {
    if (
      this.numeroCodigoDeBarras !== '' &&
      this.dataDeVencimento > this.dataAtual
    ) {
      console.log(`Processando pagamento via boleto no valor de ${valor}`);
      return true;
    } else {
      console.log('Pagamento via boleto falhou.');
      return false;
    }
  }

  informacaoPagamento(): string {
    return `Boleto: 
      Número: ${this.numeroBoleto}
      Código de Barras: ${this.numeroCodigoDeBarras}
      Data de Vencimento: ${this.dataDeVencimento}`;

  }

  private gerarCodigoDeBarras(): string {
    let codigoDeBarras = '';
    for (let i = 0; i < 48; i++) {
      codigoDeBarras += Math.floor(Math.random() * 10); // gera um dígito aleatório de 0 a 9
    }
    return codigoDeBarras;
  }
}

class PagamentoDebitoCaixa implements FormaDePagamento {
  constructor(
    private nomeTitular: string,
    private CPF: string,
    private numeroCartao: number,
    private CVV: number,
  ) {}

  processarPagamento(valor: number): boolean {
    if (
      this.nomeTitular !== '' &&
      this.numeroCartao !== null && this.numeroCartao.toString().length === 16 &&
      this.CVV.toString().length === 3 && this.CVV !== null
    ) {
      console.log(`Processando pagamento via débito no valor de ${valor}`);
      return true;
    } else {
      console.log('Pagamento via débito falhou.');
      return false;
    }
  }

  informacaoPagamento(): string {
    return `Débito:
     Titular: ${this.nomeTitular}
     CPF: ${this.CPF}
     Número do Cartão: ${this.numeroCartao}
     CVV: ${this.CVV}`;

  }
}

class PagamentoPix implements FormaDePagamento {
  constructor(private linkQrCode: string) {}

  processarPagamento(valor: number): boolean {
    if (this.linkQrCode !== '') {
      console.log(`Processando pagamento via Pix no valor de ${valor}`);
      return true;
    } else {
      console.log('Pagamento via Pix falhou.');
      return false;
    }
  }

  informacaoPagamento(): string {
    return `Pix:
    Link do QR Code: ${this.linkQrCode}`;

  }
}

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

// Exemplos de uso:
// Teste com Pagamento via Cartão de Crédito
let carrinho = new Carrinho(1, 'Daniel Lindo');
const pagamentoCartao = new PagamentoCartaoCredito('Daniel Lindo', '123.456.789-00', 1234567891234567, 123, new Date(2023, 11, 1));
carrinho.adicionarAoCarrinho(50);
carrinho.adicionarAoCarrinho(50);
carrinho.aplicarCupom('CUPOM10');
carrinho.setFormaDePagamento(pagamentoCartao);
carrinho.processarPedido();


// Teste com Pagamento via Boleto
carrinho = new Carrinho(2, 'Wengel Lindo');
const pagamentoBoleto = new PagamentoBoleto(123456, new Date(2023, 11, 1));
carrinho.adicionarAoCarrinho(100);
carrinho.aplicarCupom('CUPOM15');
carrinho.setFormaDePagamento(pagamentoBoleto);
carrinho.processarPedido();


// Teste com Pagamento via Débito Caixa
carrinho = new Carrinho(3, 'Dib Lindo');
const pagamentoDebitoCaixa = new PagamentoDebitoCaixa('Dib Lindo', '123.456.789-00', 1234567891234567, 123);
carrinho.adicionarAoCarrinho(200);
carrinho.aplicarCupom('CUPOM15');
carrinho.setFormaDePagamento(pagamentoDebitoCaixa);
carrinho.processarPedido();


// Teste com Pagamento via Pix
carrinho = new Carrinho(4, 'Breno Lindo');
const pagamentoPix = new PagamentoPix('https://exemplo.com/qrcode');
carrinho.adicionarAoCarrinho(300);
carrinho.adicionarAoCarrinho(300);
carrinho.aplicarCupom('CUPOM15');
carrinho.setFormaDePagamento(pagamentoPix);
carrinho.processarPedido();

