import { Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { DatabindsComponent } from './demos/databinds/databinds.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { ProdutoDetalheComponent } from './produtos/produto-detalhe/produto-detalhe.component';

export const routes: Routes = [
    { path:'', redirectTo: '/home', pathMatch: 'full' },
    { path:'home', component: HomeComponent },
    { path:'sobre', component: SobreComponent },
    { path:'contato', component: ContatoComponent },
    { path:'feature-databinds', component: DatabindsComponent },
    { path:'produtos', component: ListaProdutoComponent },
    { path:'produto-detalhe/:id', component: ProdutoDetalheComponent }
];
