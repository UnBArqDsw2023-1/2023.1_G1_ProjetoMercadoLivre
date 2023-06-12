import { ProdutoController } from "./controller/ProdutoController";
import { CategoriaController } from "./controller/CategoriaController";
import { Categoria } from "./model/Categoria";
import { Data } from "./Data"
import * as readline from 'readline-sync';

let categoria = new CategoriaController();
let produto = new ProdutoController();

let db = Data.getInstance();
let cat1 = new Categoria(21, "Diversos", "Descricao generica");
db.categorias.push(cat1);
console.log("Categorias iniciais: ", db.categorias);
// Dados pre-cadastrados
categoria.cadastrar("Casa", "Moveis e decoracao");
categoria.cadastrar("Veiculos", "Carros, Motos e Outros");

// categoria.atualizar(new Categoria(2, "Saude", "Para sua vida diaria"));

let ctg = new Categoria(3, "Ferramentas", "Descubra as melhores ferramentas para a sua obra");
db.categorias.push(ctg);

produto.cadastrar("Sofa", "Sofa De Canto 5 Lugares Cinza", 1000, 150, 200, true, 4, "Qtar", true, 10, true, 10, ctg);
produto.cadastrar("Tapete", "Tapete Mega Promocao", 100, 200, 4, true, 5, "show", true, 15, true, 23, ctg);

let loop = true;

while(loop) {
    menu();
    let opcao = readline.question("Escolha uma opcao: ");
    switch(opcao) {
        case '1':
            let marca = readline.question("Digite a marca: ");
            produto.obterTodosMarca(marca);
            break;
        case '2':
            let categoria = readline.question("Digite o nome da categoria: ");
            produto.obterTodosCategoria(categoria);
            break;
        case '3':
            let avaliacao = readline.question("Digite a avaliacao [1-5]: ");
            produto.obterTodosAvaliacao(parseInt(avaliacao));
            break;
        case '4':
            let desconto = readline.question("Digite o percentual de desconto: ");
            produto.obterTodosDesconto(parseInt(desconto));
            break;
        case '5':
            let precoMinimo = readline.question("Digite o preço minimo: ");
            let precoMaximo = readline.question("Digite o preco maximo: ");
            produto.obterTodosPreco(parseInt(precoMinimo), parseInt(precoMaximo));
            break;
        case '6':
            loop = false;
            break;
        default:
            console.log("Opção inválida!");
    }
}

function menu(): void {
    console.log("1. Para filtar por marca.");
    console.log("2. Para filtar por categoria.");
    console.log("3. Para filtar por avaliacao.");
    console.log("4. Para filtar por desconto.");
    console.log("5. Para filtar por preço.");
}