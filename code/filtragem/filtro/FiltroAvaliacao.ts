import { Produto } from '../model/Produto';
import { Filtro } from './Filtro';

class FiltroAvaliacao extends Filtro {
  constructor(private avaliacaoMinima: number) {
    super();
  }

  filtrar(): Produto[] {
    const produtos = this.dataBase.getProdutos();
    return produtos.filter((produto) => produto.getAvaliacao() >= this.avaliacaoMinima);
  }
}

export { FiltroAvaliacao };
