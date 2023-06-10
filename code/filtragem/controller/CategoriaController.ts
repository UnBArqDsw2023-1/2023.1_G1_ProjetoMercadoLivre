import { Data } from "../Data"
import { Categoria } from "../model/Categoria"

export default class CategoriaController {

    dataBase = Data.getInstance();

    cadastrar(id: number, nome: string, descricao: string): void {
        const categoria = new Categoria(id, nome, descricao);
        this.dataBase.categorias.push(categoria);

        console.log("Cadastrado com sucesso!");
    }

    obterTodos(): void {
        this.dataBase.categorias.forEach((categoria) => {
            console.log(categoria.toString());
        });
    }
}