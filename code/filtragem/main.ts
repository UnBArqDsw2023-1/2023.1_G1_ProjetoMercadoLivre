import CategoriaController from "./controller/CategoriaController";

let categoria = new CategoriaController();

categoria.cadastrar(1, "eletronicos", "tecnologia");
categoria.obterTodos();