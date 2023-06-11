import { Produto } from '../model/Produto';
import { Filtro } from './Filtro';
import { Data } from '../Data';

class FiltroPreco extends Filtro {
  constructor(private precoMinimo: number, private precoMaximo: number) {
    super();
  }

  filtrar(): Produto[] {
    const dataBase = Data.getInstance();
    const produtos = dataBase.getProdutos();
    return produtos.filter((produto) => produto.getPreco() >= this.precoMinimo && produto.getPreco() <= this.precoMaximo);
  }
}

export { FiltroPreco };
