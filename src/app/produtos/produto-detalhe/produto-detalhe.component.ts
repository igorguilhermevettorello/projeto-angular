import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProdutosService } from '../../services/produtos.service';
import { ProdutoModel } from '../../models/produto.model';

@Component({
  selector: 'app-produto-detalhe',
  imports: [CommonModule, RouterModule],
  templateUrl: 'produto-detalhe.component.html'
})

export class ProdutoDetalheComponent implements OnInit{
  
  constructor(private produtoService: ProdutosService, private route: ActivatedRoute) {}
  
  public produto: ProdutoModel = new ProdutoModel();

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.produtoService.obterProdutos().subscribe(produtos => {
      this.produto = produtos.filter(item => item.id == id).map(item => item).shift() ?? new ProdutoModel();
    }, error => {
      console.log("error", error)
    });

  }

}
