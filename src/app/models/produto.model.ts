import { ProdutoInterface } from "../interfaces/produto/produto.interface";

export class ProdutoModel implements ProdutoInterface {
    id = 0;
    nome = '';
    valor = 0;
    promocao = false;
    valorPromo = 0;
    imagem = '';

    constructor(init?: Partial<ProdutoInterface>) {
      Object.assign(this, init);
    }    
}
