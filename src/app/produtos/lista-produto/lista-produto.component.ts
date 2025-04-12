import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from '../../models/produto.model';
import { ProdutosService } from '../../services/produtos.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-produto',
  imports: [CommonModule, RouterModule],
  templateUrl: 'lista-produto.component.html'
})
export class ListaProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutosService) {}

  public produtos: ProdutoModel[] = [];

  ngOnInit(): void {
    this.produtoService.obterProdutos().subscribe(response => {
      this.produtos = response;
    }, error => {
      console.log("error", error)
    });
  }
}
