import { Produto } from '../Produto';
import { Filtro } from './Filtro';

class FiltroCategoria extends Filtro {
    constructor(private categoria: string) {
      super();
    }

    filtrar(): Produto[] {
      const categoriaSelecionada = this.dataBase.getCategorias().filter((categoria) => categoria.getNome().toLowerCase() === this.categoria.toLowerCase());
      const idCategoria = categoriaSelecionada[0]?.getId();
      return this.dataBase.produtos.filter((produto) => produto.getCategoria().getId() === idCategoria);  
    }
}

export { FiltroCategoria };