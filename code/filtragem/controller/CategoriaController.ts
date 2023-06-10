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

    atualizar(categoria: Categoria): string {
        const indexCategoria = this.dataBase.categorias.findIndex((ctg) => ctg.getId() == categoria.getId())
        if(indexCategoria >= 0) {
            this.dataBase.categorias[indexCategoria] = categoria;
            return "Categoria atualizada com sucesso!"
        }
        return "Esta categoria não existe!";
    }

    buscarPorID(id: number): Categoria | string {
        const categoriaEncontrada = this.dataBase.categorias.find((categoria) => categoria.getId() == id);
        return categoriaEncontrada ? categoriaEncontrada : "Esta categoria não existe!" 
    }

    buscarPorNome(nome: string): Categoria | string {
        const categoriaEncontrada = this.dataBase.categorias.find((categoria) => categoria.getNome() == nome);
        return categoriaEncontrada ? categoriaEncontrada : "Esta categoria não existe!"
    }

    remover(id: number): string {
        const indexCategoria = this.dataBase.categorias.findIndex((categoria) => categoria.getId() == id)
        if(indexCategoria >= 0){
            this.dataBase.categorias.splice(indexCategoria, 1);
            return "Categoria removida com sucesso!";
        }
        return "Esta categoria não existe!";
    }

    obterTodos(): void {
        this.dataBase.categorias.forEach((categoria) => {
            console.log(categoria.toString());
        });
    }
}