"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = Carrinho;
