import { Produto } from '../model/Produto.ts';
import { Filtro } from './Filtro';
import { Categoria } from '../model/Categoria';

class FiltroCategoria extends Filtro {
  constructor(private categoria: string) {
    super();
  }

  filtrar(): Produto[] {
    const produtos = this.dataBase.getProdutos();
    const categoriaSelecionada = this.dataBase.getCategorias().filter((categoria) => categoria.getNome() === this.categoria);
    const idCategoria = categoriaSelecionada[0]?.getId();

    return produtos.filter((produto) => produto.contemCategoria(idCategoria));  }
}

export { FiltroCategoria };
