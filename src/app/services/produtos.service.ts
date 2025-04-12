import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProdutoModel } from '../models/produto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  public url: string = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  obterProdutos() : Observable<ProdutoModel[]> {
    return this.http.get<ProdutoModel[]>(this.url + "produtos");
  }
}
