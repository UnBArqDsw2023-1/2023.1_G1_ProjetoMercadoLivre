import FormaDePagamento from './FormadePagamento';

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

export default PagamentoDebitoCaixa;