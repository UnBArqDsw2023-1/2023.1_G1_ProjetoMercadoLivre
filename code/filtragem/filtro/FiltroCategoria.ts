import { Produto } from '../model/Produto';
import { Filtro } from './Filtro';
import { Categoria } from '../model/Categoria';

class FiltroCategoria extends Filtro {
  constructor(private categoria: Categoria) {
    super();
  }

  filtrar(): Produto[] {
    const produtos = this.dataBase.getProdutos();
    return produtos.filter((produto) => produto.categoria === this.categoria.getNome());
  }
}

export { FiltroCategoria };
