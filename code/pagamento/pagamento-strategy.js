"use strict";
class PagamentoCartaoCredito {
    constructor(nomeTitular, CPF, numeroCartao, CVV, dataDeVencimento) {
        this.nomeTitular = nomeTitular;
        this.CPF = CPF;
        this.numeroCartao = numeroCartao;
        this.CVV = CVV;
        this.dataDeVencimento = dataDeVencimento;
        this.dataAtual = new Date();
    }
    processarPagamento(valor) {
        if (this.nomeTitular !== '' &&
            this.numeroCartao !== null && this.numeroCartao.toString().length === 16 &&
            this.CVV.toString().length === 3 && this.CVV !== null &&
            this.dataDeVencimento > this.dataAtual) {
            console.log(`Processando pagamento via cartão de crédito no valor de ${valor}`);
            return true;
        }
        else {
            console.log('Pagamento via cartão de crédito falhou.');
            return false;
        }
    }
    informacaoPagamento() {
        return `Cartão de Crédito:
      Titular: ${this.nomeTitular}
      CPF: ${this.CPF}
      Numero do Cartão: ${this.numeroCartao}
      Data: ${this.dataDeVencimento}
      CVV: ${this.CVV}`;
    }
}
class PagamentoBoleto {
    constructor(numeroBoleto, dataDeVencimento) {
        this.numeroBoleto = numeroBoleto;
        this.dataDeVencimento = dataDeVencimento;
        this.dataAtual = new Date();
        this.numeroCodigoDeBarras = this.gerarCodigoDeBarras();
    }
    processarPagamento(valor) {
        if (this.numeroCodigoDeBarras !== '' &&
            this.dataDeVencimento > this.dataAtual) {
            console.log(`Processando pagamento via boleto no valor de ${valor}`);
            return true;
        }
        else {
            console.log('Pagamento via boleto falhou.');
            return false;
        }
    }
    informacaoPagamento() {
        return `Boleto: 
      Número: ${this.numeroBoleto}
      Código de Barras: ${this.numeroCodigoDeBarras}
      Data de Vencimento: ${this.dataDeVencimento}`;
    }
    gerarCodigoDeBarras() {
        let codigoDeBarras = '';
        for (let i = 0; i < 48; i++) {
            codigoDeBarras += Math.floor(Math.random() * 10); // gera um dígito aleatório de 0 a 9
        }
        return codigoDeBarras;
    }
}
class PagamentoDebitoCaixa {
    constructor(nomeTitular, CPF, numeroCartao, CVV) {
        this.nomeTitular = nomeTitular;
        this.CPF = CPF;
        this.numeroCartao = numeroCartao;
        this.CVV = CVV;
    }
    processarPagamento(valor) {
        if (this.nomeTitular !== '' &&
            this.numeroCartao !== null && this.numeroCartao.toString().length === 16 &&
            this.CVV.toString().length === 3 && this.CVV !== null) {
            console.log(`Processando pagamento via débito no valor de ${valor}`);
            return true;
        }
        else {
            console.log('Pagamento via débito falhou.');
            return false;
        }
    }
    informacaoPagamento() {
        return `Débito:
     Titular: ${this.nomeTitular}
     CPF: ${this.CPF}
     Número do Cartão: ${this.numeroCartao}
     CVV: ${this.CVV}`;
    }
}
class PagamentoPix {
    constructor(linkQrCode) {
        this.linkQrCode = linkQrCode;
    }
    processarPagamento(valor) {
        if (this.linkQrCode !== '') {
            console.log(`Processando pagamento via Pix no valor de ${valor}`);
            return true;
        }
        else {
            console.log('Pagamento via Pix falhou.');
            return false;
        }
    }
    informacaoPagamento() {
        return `Pix:
    Link do QR Code: ${this.linkQrCode}`;
    }
}
class Carrinho {
    constructor(id, nomeCliente, valorCompra = 0, // Valor inicial do carrinho é 0
    IsPago = false, // Inicialmente, o carrinho não está pago
    cupom = '') {
        this.id = id;
        this.nomeCliente = nomeCliente;
        this.valorCompra = valorCompra;
        this.IsPago = IsPago;
        this.cupom = cupom;
    }
    adicionarAoCarrinho(valorItem) {
        // Adiciona o valor do item ao valor total do carrinho
        this.valorCompra += valorItem;
    }
    aplicarCupom(cupom) {
        // Extrai o desconto do cupom
        const desconto = parseInt(cupom.replace(/\D/g, '')); // Remove todos os caracteres não numéricos
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
    processarPedido() {
        if (!this.formaDePagamento) {
            console.log("Forma de pagamento não definida");
            return;
        }
        const pagamentoFoiProcessado = this.formaDePagamento.processarPagamento(this.valorCompra);
        if (pagamentoFoiProcessado) {
            this.IsPago = true;
            console.log("Pedido processado com sucesso!");
            this.gerarNotaFiscal();
        }
        else {
            console.log("Falha no processamento do pedido");
        }
    }
    setFormaDePagamento(formaDePagamento) {
        this.formaDePagamento = formaDePagamento;
    }
    gerarNotaFiscal() {
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
