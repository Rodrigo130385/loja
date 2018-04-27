import { OrcamentoComponent } from './orcamento/orcamento.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ConcluidoComponent } from './concluido/concluido.component';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { BlogComponent } from './blog/blog.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { MedidaCamisetaComponent } from './medida-camiseta/medida-camiseta.component';

const routes: Routes =[
    { path: 'concluido', component:ConcluidoComponent }, 
    { path: 'orcamento/:tipo',        component: OrcamentoComponent },  
    { path: 'orcamento',        component: OrcamentoComponent },
    { path: 'blog',        component: BlogComponent },
    { path: 'como-funciona',        component: ComoFuncionaComponent },
    { path: 'medidas-de-camisetas-personalizadas',        component: MedidaCamisetaComponent },
    { path: 'produtos',        component: ProdutosComponent }, 
    { path: 'produto/:id',        component: ProdutoComponent },
    { path: 'buscar',        component: BuscarComponent },
    { path: '',        component: HomeComponent }
    //{ path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
    

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: false})
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }