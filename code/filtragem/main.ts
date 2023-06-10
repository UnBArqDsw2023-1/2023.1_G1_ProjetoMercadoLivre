import { CategoriaController } from "./controller/CategoriaController";

// testes 

let categoria = new CategoriaController();

categoria.cadastrar("eletronico", "tecnologia");
categoria.cadastrar("casa", "mesa e banho");
categoria.obterTodos();