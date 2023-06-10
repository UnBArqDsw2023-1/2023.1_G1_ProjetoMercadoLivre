class Data {

    private static _instance: Data;
    public categorias: Array<Categoria> = [];
    //public produtos: Array<Produto> = [];
    
    constructor() {
    }

    public static getInstance(): Data {
        if (!Data._instance) {
          Data._instance = new Data();
        }
        return Data._instance;
    }
}