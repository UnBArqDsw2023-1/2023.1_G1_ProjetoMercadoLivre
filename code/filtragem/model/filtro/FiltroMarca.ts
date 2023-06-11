import { Produto } from "../Produto";
import { Filtro } from './Filtro';

class FiltroMarca extends Filtro {
  constructor(private marca: string) {
    super();
}

filtrar(): Produto[] {
    const produtos = this.dataBase.getProdutos();
    return produtos.filter((produto) => produto.getMarca() === this.marca);
  }
}

export { FiltroMarca };