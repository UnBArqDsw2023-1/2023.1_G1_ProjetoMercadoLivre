interface FormaDePagamento {
    processarPagamento(valor: number): boolean;
    informacaoPagamento(): string;
  }

  export default FormaDePagamento;