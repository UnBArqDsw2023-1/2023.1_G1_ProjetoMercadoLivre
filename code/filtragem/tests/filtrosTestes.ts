import { ProdutoController } from "../controller/ProdutoController";
import { filtroProdutosTeste } from "../mock/produtosMock";
import { Produto } from "../model/Produto";
import { FiltroAvaliacao } from "../model/filtro/FiltroAvaliacao";
import { FiltroCategoria } from "../model/filtro/FiltroCategoria";
import { FiltroDesconto } from "../model/filtro/FiltroDesconto"
import { FiltroMarca } from "../model/filtro/FiltroMarca";
import { FiltroPreco } from "../model/filtro/FiltroPreco"

export class FiltrosTestes {
    produtoController: ProdutoController = new ProdutoController();
    constructor() {
        filtroProdutosTeste.forEach((element) => {
            let obj = new Produto(
                element.Id,
                element.nome,
                element.descricao,
                element.preco,
                element.condicaoProduto,
                element.avaliacao,
                element.marca,
                element.disponibilidade,
                element.percentualDesconto,
                element.aceitaParcelamento,
                element.estoque,
                element.idsDeCategoria
            ); 
            this.produtoController.cadastrarProdutoTeste(obj);
        })
    }

    public rodarTestesDeFiltro(): void {
        console.log(this.testCadastrarProdutos() ? '-- OK': '-- FALHOU');
        console.log(this.testeFiltroAvaliacao() ? '-- OK': '-- FALHOU');
        console.log(this.testeFiltroCategoria() ? '-- OK': '-- FALHOU');
        console.log(this.testeFiltroDesconto() ? '-- OK': '-- FALHOU');
        console.log(this.testeFiltroMarca() ? '-- OK': '-- FALHOU');
        console.log(this.testeFiltroPreco() ? '-- OK': '-- FALHOU');
    }

    public testCadastrarProdutos(): boolean {
        console.log('\nTeste de cadastro de produtos: -----------------------------------------------------\n');
        const listaProdutos = this.produtoController.getalltest();
        if(listaProdutos.length === 0) return false;

        // listaProdutos.forEach((produto) => {
        //     console.log();
        //     console.log(produto.toString());      //Descomente para verificar os resultados
        //     console.log();
        // })
        
        return true;
    }

    // Testes com filtros

    
    // FiltroAvaliacao
    public testeFiltroAvaliacao(): boolean {
        
        let avaliacaoTeste = 13;

        const filtroAvaliacao = new FiltroAvaliacao(avaliacaoTeste);
        const resultadoAvaliacao = filtroAvaliacao.filtrar();

        console.log('\nFiltro de avaliação: ------------------------------\n');
        
        resultadoAvaliacao.forEach((produto) => {
            if(produto.getAvaliacao() < avaliacaoTeste) return false;
        })
        // console.log(resultadoAvaliacao);   //Descomente para verificar os resultados
        return true;
    }

    // Filtro Categoria
    public testeFiltroCategoria(): boolean {
        
        let categoriaTeste = 'casa';

        const filtroCategoria = new FiltroCategoria(categoriaTeste);
        const resultadoCategoria = filtroCategoria.filtrar();

        console.log('\nFiltro de categoria: ------------------------------\n');
        
        if(resultadoCategoria.length === 0) return false;
        resultadoCategoria.forEach((produto) => {
            if(produto.contemCategoria(produto.getIdsDeCategoria()[0]) === false) return false;
        })
        // console.log(resultadoCategoria);  //Descomente para verificar os resultados
        return true;
    }

    // Filtro Desconto
    public testeFiltroDesconto(): boolean {

        let descontoTeste = 50;

        const filtroDesconto = new FiltroDesconto(descontoTeste);
        const resultadoDesconto = filtroDesconto.filtrar();

        console.log('\nFiltro de desconto: ------------------------------\n');

        resultadoDesconto.forEach((produto) => {
            if(produto.getPercentualDesconto() < descontoTeste) return false;
        })       
        // console.log(resultadoDesconto);  //Descomente para verificar os resultados
        return true;
    }
    
    // Filtro de marca
    public testeFiltroMarca(): boolean {

        let marcaTeste = 'nostromo2';

        const filtroMarca = new FiltroMarca(marcaTeste);
        const resultadoMarca = filtroMarca.filtrar();

        console.log('\nFiltro de marca: ------------------------------\n');
        resultadoMarca.forEach((produto) => {
            if(produto.getMarca() !== marcaTeste) return false;
        })       
        // console.log(resultadoMarca);   //Descomente para verificar os resultados
        return true;
    }

    //Filtro Preço
    public testeFiltroPreco(): boolean {

        let precoTesteMinimo = 20;
        let precoTesteMaximo = 80;

        const filtroPreco = new FiltroPreco(precoTesteMinimo, precoTesteMaximo);
        const resultadoPreco = filtroPreco.filtrar();

        console.log('\nFiltro de preço: ------------------------------\n');
        
        resultadoPreco.forEach((produto) => {
            if(produto.getPreco() < precoTesteMinimo || produto.getPreco() > precoTesteMaximo) return false;
        })
        //console.log(resultadoMarca);   //Descomente para verificar os resultados
        return true;
    }
}