import { Data } from "../Data"
import { Categoria } from "../model/Categoria"

export class CategoriaController {

    dataBase = Data.getInstance();

    cadastrar(nome: string, descricao: string): void {
        let proxID = this.dataBase.categorias.length + 1;

        const categoria = new Categoria(proxID, nome, descricao);
        if(this.dataBase.categorias.filter((ctg) => ctg.getNome() === nome).length > 0){
            console.log("Essa categoria já existe!");
            return;
        } else{
            this.dataBase.categorias.push(categoria);
            console.log("Cadastrado com sucesso!");
            return;
        }
    }

    atualizar(categoria: Categoria): void {
        const indexCategoria = this.dataBase.categorias.findIndex((ctg) => ctg.getId() == categoria.getId())
        if(indexCategoria >= 0) {
            this.dataBase.categorias[indexCategoria] = categoria;
            console.log("Categoria atualizada com sucesso!");
            return;
        }
        console.log("Esta categoria não existe!");
    }

    buscarPorID(id: number): void {
        const categoriaEncontrada = this.dataBase.categorias.find((categoria) => categoria.getId() == id);
        if(categoriaEncontrada) {
            console.log(categoriaEncontrada.toString());
            return;
        }
        console.log("Esta categoria não existe!"); 
    }

    buscarPorNome(nome: string): void {
        const categoriaEncontrada = this.dataBase.categorias.find((categoria) => categoria.getNome() == nome);
        if(categoriaEncontrada) {
            console.log(categoriaEncontrada.toString());
            return;
        }
        console.log("Esta categoria não existe!"); 
    }

    remover(id: number): void {
        const indexCategoria = this.dataBase.categorias.findIndex((categoria) => categoria.getId() == id)
        if(indexCategoria >= 0){
            this.dataBase.categorias.splice(indexCategoria, 1);
            console.log("Categoria removida com sucesso!");
            return;
        }
        console.log("Esta categoria não existe!");
    }

    obterTodos(): void {
        this.dataBase.categorias.forEach((categoria) => {
            console.log(categoria.toString());
        });
    }
}