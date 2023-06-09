interface FormaDePagamento {
    processarPagamento(valor: number): void;
  } 
  
  class PagamentoCartaoCredito implements FormaDePagamento {
    processarPagamento(valor: number): void {
      console.log(`Processando pagamento via cartão de crédito no valor de ${valor}`);
      // Lógica para processar o pagamento via cartão de crédito
    }
  }
  
  class PagamentoPix implements FormaDePagamento {
    processarPagamento(valor: number): void {
      console.log(`Processando pagamento via Pix no valor de ${valor}`);
      // Lógica para processar o pagamento via pix
    }
  }
  
  class PagamentoDebitoCaixa implements FormaDePagamento {
    processarPagamento(valor: number): void {
      console.log(`Processando pagamento via debito no valor de ${valor}`);
      // Lógica para processar o pagamento via debito
    }
  }
 
  class PagamentoBoleto implements FormaDePagamento {
    processarPagamento(valor: number): void {
      console.log(`Processando pagamento via boleto no valor de ${valor}`);
      // Lógica para processar o pagamento via boleto
    }
  }
  
  class Carrinho {
    private formaDePagamento: FormaDePagamento;
  
    setFormaDePagamento(formaDePagamento: FormaDePagamento): void {
      this.formaDePagamento = formaDePagamento;
    }
  
    processarPedido(valor: number): void {
      // Lógica do processamento do pedido
  
      this.formaDePagamento.processarPagamento(valor);
  
      // Mais lógica do processamento do pedido
    }
  }
  
  // Exemplo de uso:
  const carrinho = new Carrinho();
  const pagamentoCartao = new PagamentoCartaoCredito();
  const pagamentoPix = new PagamentoPix();
  
  carrinho.setFormaDePagamento(pagamentoCartao);
  carrinho.processarPedido(100.00);
  
  carrinho.setFormaDePagamento(pagamentoPix);
  carrinho.processarPedido(50.00);
  