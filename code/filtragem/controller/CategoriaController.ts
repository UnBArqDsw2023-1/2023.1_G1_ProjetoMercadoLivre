import { Data } from "../Data"
import { Categoria } from "../model/Categoria"

export class CategoriaController {

    dataBase = Data.getInstance();

    cadastrar(nome: string, descricao: string): string {
        let proxID = this.dataBase.categorias.length + 1;

        const categoria = new Categoria(proxID, nome, descricao);
        this.dataBase.categorias.push(categoria);

        return "Cadastrado com sucesso!";
    }

    obterTodos(): void {
        this.dataBase.categorias.forEach((categoria) => {
            console.log(categoria.toString());
        });
    }
}