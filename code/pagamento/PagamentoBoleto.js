"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = PagamentoBoleto;
