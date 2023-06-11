import { Produto } from '../model/Produto';
import { Data } from "../Data"

class Filtro {
  protected dataBase: Data;

  constructor() {
    this.dataBase = Data.getInstance();
  }

  filtrar(): Produto[] {
    const produtos = this.dataBase.getProdutos();
    return produtos;
  }
}

export { Filtro };

