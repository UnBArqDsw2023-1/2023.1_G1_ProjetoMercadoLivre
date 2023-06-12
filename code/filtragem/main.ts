import { ProdutoController } from "./controller/ProdutoController";
import { CategoriaController } from "./controller/CategoriaController";
import { Categoria } from "./model/Categoria";
import { Produto } from "./model/Produto";
import * as readline from 'readline-sync';

let categoria = new CategoriaController();
let produto = new ProdutoController();

// Dados pre-cadastrados
categoria.dataBase.categorias.push(new Categoria(1, "Casa", "Moveis e decoracao"));
categoria.dataBase.categorias.push(new Categoria(2, "Veiculos", "Carros, Motos e Outros"));
categoria.dataBase.categorias.push(new Categoria(3, "Ferramentas", "Descubra as melhores ferramentas para a sua obra"));

produto.dataBase.produtos.push(new Produto(1, "Sofa", "Sofa De Canto 5 Lugares Cinza", 1000, 150, 200, true, 4, "Qtar", true, 10, true, 10, categoria.dataBase.categorias[0]));
produto.dataBase.produtos.push(new Produto(2, "Sofa Retratil", "Sofa de 2 Lugares Azul Escuro", 850, 110, 172, true, 5, "QTAR", true, 5, true, 5, categoria.dataBase.categorias[0]));
produto.dataBase.produtos.push(new Produto(3, "Tapete", "Tapete Mega Promocao", 100, 200, 4, true, 5, "show", true, 15, true, 23, categoria.dataBase.categorias[0]));
produto.dataBase.produtos.push(new Produto(4, "Onix", "Onix Roxo", 70000, 460, 1345, false, 5, "Chevrolet", true, 0, true, 1, categoria.dataBase.categorias[1]));

let loop = true;

while(loop) {
    menu();
    let opcao = readline.question("Escolha uma opcao: ");
    switch(opcao) {
        case '1':
            let marca = readline.question("Digite a marca: ");
            console.log("\n\n ------------- Lista de Produtos ------------- \n");
            produto.obterTodosMarca(marca);
            break;
        case '2':
            let categoria = readline.question("Digite o nome da categoria: ");
            console.log("\n\n ------------- Lista de Produtos ------------- \n");
            produto.obterTodosCategoria(categoria);
            break;
        case '3':
            let avaliacao = readline.question("Digite a avaliacao [1-5]: ");
            console.log("\n\n ------------- Lista de Produtos ------------- \n");
            produto.obterTodosAvaliacao(parseInt(avaliacao));
            break;
        case '4':
            let desconto = readline.question("Digite o percentual de desconto: ");
            console.log("\n\n ------------- Lista de Produtos ------------- \n");
            produto.obterTodosDesconto(parseInt(desconto));
            break;
        case '5':
            let precoMinimo = readline.question("Digite o preco minimo: ");
            let precoMaximo = readline.question("Digite o preco maximo: ");
            console.log("\n\n ------------- Lista de Produtos ------------- \n");
            produto.obterTodosPreco(parseInt(precoMinimo), parseInt(precoMaximo));
            break;
        case '6':
            loop = false;
            console.log("\n -------- Fim ---------- \n");
            break;
        default:
            console.log("\nOpcao invalida! Tente novamente. \n");
    }
}

function menu(): void {
    console.log("\n------------- MENU -------------");
    console.log("1. Para filtar por marca");
    console.log("2. Para filtar por categoria");
    console.log("3. Para filtar por avaliacao");
    console.log("4. Para filtar por desconto");
    console.log("5. Para filtar por preço");
    console.log("6. Para sair");
    console.log("---------------------------------- \n");
}