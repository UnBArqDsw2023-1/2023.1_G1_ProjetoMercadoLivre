class Categoria {

    private id: number;
    private nome: string;
    private descricao: string;

    constructor (id: number, nome: string, descricao: string) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }

    public getId(): number {
        return this.id;
    }
    
    public setId(id: number): void {
        this.id = id;
    }

    public getNome(): string {
        return this.nome;
    }
    
    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getDescricao(): string {
        return this.descricao;
    }
    
    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }
}