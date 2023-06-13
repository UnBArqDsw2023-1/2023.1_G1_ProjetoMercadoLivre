"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PagamentoCartaoCredito_1 = __importDefault(require("./PagamentoCartaoCredito"));
const PagamentoBoleto_1 = __importDefault(require("./PagamentoBoleto"));
const PagamentoDebitoCaixa_1 = __importDefault(require("./PagamentoDebitoCaixa"));
const PagamentoPix_1 = __importDefault(require("./PagamentoPix"));
const Carrinho_1 = __importDefault(require("./Carrinho"));
// Exemplos de uso:
// Teste com Pagamento via Cartão de Crédito
let carrinho = new Carrinho_1.default(1, 'Daniel Lindo');
const pagamentoCartao = new PagamentoCartaoCredito_1.default('Daniel Lindo', '123.456.789-00', 1234567891234567, 123, new Date(2023, 11, 1));
carrinho.adicionarAoCarrinho(50);
carrinho.adicionarAoCarrinho(50);
carrinho.setFormaDePagamento(pagamentoCartao);
carrinho.processarPedido();
// Teste com Pagamento via Boleto
carrinho = new Carrinho_1.default(2, 'Wengel Lindo');
const pagamentoBoleto = new PagamentoBoleto_1.default(123456, new Date(2023, 11, 1));
carrinho.adicionarAoCarrinho(100);
carrinho.setFormaDePagamento(pagamentoBoleto);
carrinho.processarPedido();
// Teste com Pagamento via Débito Caixa
carrinho = new Carrinho_1.default(3, 'Dib Lindo');
const pagamentoDebitoCaixa = new PagamentoDebitoCaixa_1.default('Dib Lindo', '123.456.789-00', 1234567891234567, 123);
carrinho.adicionarAoCarrinho(200);
carrinho.setFormaDePagamento(pagamentoDebitoCaixa);
carrinho.processarPedido();
// Teste com Pagamento via Pix
carrinho = new Carrinho_1.default(4, 'Breno Lindo');
const pagamentoPix = new PagamentoPix_1.default('https://exemplo.com/qrcode');
carrinho.adicionarAoCarrinho(300);
carrinho.adicionarAoCarrinho(300);
carrinho.setFormaDePagamento(pagamentoPix);
carrinho.processarPedido();
