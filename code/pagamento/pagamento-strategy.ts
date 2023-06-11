import FormaDePagamento from './FormadePagamento';
import PagamentoCartaoCredito from './PagamentoCartaoCredito';
import PagamentoBoleto from './PagamentoBoleto';
import PagamentoDebitoCaixa from './PagamentoDebitoCaixa';
import PagamentoPix from './PagamentoPix';
import Carrinho from './Carrinho';

// Exemplos de uso:
// Teste com Pagamento via Cartão de Crédito
let carrinho = new Carrinho(1, 'Daniel Lindo');
const pagamentoCartao = new PagamentoCartaoCredito('Daniel Lindo', '123.456.789-00', 1234567891234567, 123, new Date(2023, 11, 1));
carrinho.adicionarAoCarrinho(50);
carrinho.adicionarAoCarrinho(50);
carrinho.setFormaDePagamento(pagamentoCartao);
carrinho.processarPedido();


// Teste com Pagamento via Boleto
carrinho = new Carrinho(2, 'Wengel Lindo');
const pagamentoBoleto = new PagamentoBoleto(123456, new Date(2023, 11, 1));
carrinho.adicionarAoCarrinho(100);
carrinho.setFormaDePagamento(pagamentoBoleto);
carrinho.processarPedido();


// Teste com Pagamento via Débito Caixa
carrinho = new Carrinho(3, 'Dib Lindo');
const pagamentoDebitoCaixa = new PagamentoDebitoCaixa('Dib Lindo', '123.456.789-00', 1234567891234567, 123);
carrinho.adicionarAoCarrinho(200);
carrinho.setFormaDePagamento(pagamentoDebitoCaixa);
carrinho.processarPedido();


// Teste com Pagamento via Pix
carrinho = new Carrinho(4, 'Breno Lindo');
const pagamentoPix = new PagamentoPix('https://exemplo.com/qrcode');
carrinho.adicionarAoCarrinho(300);
carrinho.adicionarAoCarrinho(300);
carrinho.setFormaDePagamento(pagamentoPix);
carrinho.processarPedido();

