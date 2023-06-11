import { Produto } from '../model/Produto';
import { Filtro } from './Filtro';
import { Data } from '../Data';

class FiltroDesconto extends Filtro {
  constructor(private percentualMinimoDesconto: number) {
    super();
  }

  filtrar(): Produto[] {
    const dataBase = Data.getInstance();
    const produtos = dataBase.getProdutos();
    return produtos.filter((produto) => produto.getPercentualDesconto() >= this.percentualMinimoDesconto);
  }
}

export { FiltroDesconto };
