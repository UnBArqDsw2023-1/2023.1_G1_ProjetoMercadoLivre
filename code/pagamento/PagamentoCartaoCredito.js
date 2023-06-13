"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = PagamentoCartaoCredito;
