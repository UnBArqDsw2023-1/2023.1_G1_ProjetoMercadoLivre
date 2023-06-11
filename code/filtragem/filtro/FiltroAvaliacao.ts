import { Produto } from '../model/Produto';
import { Filtro } from './Filtro';

class FiltroAvaliacao extends Filtro {
  constructor(private avaliacaoMinima: number) {
    super();
  }

  filtrar(produtos: Produto[]): Produto[] {
    return produtos.filter((produto) => produto.avaliacao >= this.avaliacaoMinima);
  }
}

export { FiltroAvaliacao };
