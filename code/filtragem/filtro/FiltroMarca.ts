import { Produto } from '../model/Produto';
import { Filtro } from './Filtro';
import { Data } from "../Data"

class FiltroMarca extends Filtro {
  constructor(private marca: string) {
    super();
  }

  dataBase = Data.getInstance();

  filtrar(): Produto[] {
    const dataBase = Data.getInstance();
    const produtos = dataBase.getProdutos();
    return produtos.filter((produto) => produto.getMarca() === this.marca);
  }
}

export { FiltroMarca };
