import FormaDePagamento from './FormadePagamento';

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

export default PagamentoBoleto;