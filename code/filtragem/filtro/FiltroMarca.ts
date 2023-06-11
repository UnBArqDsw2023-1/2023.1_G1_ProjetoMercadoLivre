import { Produto } from '../model/Produto';
import { Filtro } from './Filtro';

class FiltroMarca extends Filtro {
  constructor(private marca: string) {
    super();
  }

  filtrar(produtos: Produto[]): Produto[] {
    return produtos.filter((produto) => produto.marca === this.marca);
  }
}

export { FiltroMarca };
