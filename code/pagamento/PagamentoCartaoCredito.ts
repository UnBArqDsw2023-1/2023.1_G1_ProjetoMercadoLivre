import FormaDePagamento from './FormadePagamento';

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

export default PagamentoCartaoCredito;