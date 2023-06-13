"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = PagamentoPix;
