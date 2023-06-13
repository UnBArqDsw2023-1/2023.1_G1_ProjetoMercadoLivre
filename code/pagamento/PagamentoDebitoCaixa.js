"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = PagamentoDebitoCaixa;
