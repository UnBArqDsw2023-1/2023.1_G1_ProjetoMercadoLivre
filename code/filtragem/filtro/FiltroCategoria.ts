import { Produto } from '../model/Produto';
import { Filtro } from './Filtro';

class FiltroCategoria extends Filtro {
  constructor(private categoria: string) {
    super();
  }

  filtrar(produtos: Produto[]): Produto[] {
    return produtos.filter((produto) => produto.categoria === this.categoria);
  }
}

export { FiltroCategoria };
