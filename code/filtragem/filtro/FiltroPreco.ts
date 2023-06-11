import { Produto } from '../model/Produto';
import { Filtro } from './Filtro';

class FiltroPreco extends Filtro {
  constructor(private precoMinimo: number, private precoMaximo: number) {
    super();
  }

  filtrar(produtos: Produto[]): Produto[] {
    return produtos.filter((produto) => produto.preco >= this.precoMinimo && produto.preco <= this.precoMaximo);
  }
}

export { FiltroPreco };
