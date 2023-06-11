import FormaDePagamento from './FormadePagamento';

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

export default PagamentoPix;