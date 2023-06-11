import { Produto } from '../model/Produto';
import { Filtro } from './Filtro';

class FiltroDesconto extends Filtro {
  constructor(private percentualMinimoDesconto: number) {
    super();
  }

  filtrar(produtos: Produto[]): Produto[] {
    return produtos.filter((produto) => produto.percentualDesconto >= this.percentualMinimoDesconto);
  }
}

export { FiltroDesconto };
