import { CategoriaController } from "./controller/CategoriaController";
import { FiltrosTestes } from "./tests/filtrosTestes";

// testes 

let categoria = new CategoriaController();

categoria.cadastrar("eletronico", "tecnologia");
categoria.cadastrar("casa", "mesa e banho");
categoria.obterTodos();

// testes com Filtros

let filtrosTestes = new FiltrosTestes();

filtrosTestes.rodarTestesDeFiltro();
