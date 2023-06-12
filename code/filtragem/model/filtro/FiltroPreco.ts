import { Produto } from '../Produto';
import { Filtro } from './Filtro';

class FiltroPreco extends Filtro {
  constructor(private precoMinimo: number, private precoMaximo: number) {
    super();
  }

  filtrar(): Produto[] {
    const produtos = this.dataBase.getProdutos();
    return produtos.filter((produto) => produto.getPreco() >= this.precoMinimo && produto.getPreco() <= this.precoMaximo);
  }
}

export { FiltroPreco };