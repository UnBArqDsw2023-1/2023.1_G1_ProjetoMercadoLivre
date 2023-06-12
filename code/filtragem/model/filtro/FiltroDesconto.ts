import { Produto } from '../Produto';
import { Filtro } from './Filtro';

class FiltroDesconto extends Filtro {
    constructor(private percentualMinimoDesconto: number) {
    super();
}

  filtrar(): Produto[] {
    const produtos = this.dataBase.getProdutos();
    return produtos.filter((produto) => produto.getPercentualDesconto() >= this.percentualMinimoDesconto);
  }
}

export { FiltroDesconto };