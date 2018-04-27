import { JwtHelper } from 'angular2-jwt';
import { LoaderbarModule } from './loaderbar/loaderbar.module';
import { ComponentsModule } from './components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RequestModule } from './request/request.module';
import { RequestService } from './request/request.service';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing';
import { JwtService } from './jwt/jwt.service';
import { ConcluidoComponent } from './concluido/concluido.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DialogSearchComponent } from './dialog-search/dialog-search.component';
import { ProdutoComponent } from './produto/produto.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { VitrineComponent } from './vitrine/vitrine.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { OrcamentoComponent } from './orcamento/orcamento.component';
import { FooterComponent } from './footer/footer.component';
import { MedidaCamisetaComponent } from './medida-camiseta/medida-camiseta.component';
import { ComoFuncionaComponent } from './como-funciona/como-funciona.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    ConcluidoComponent,
    HomeComponent,
    NavbarComponent,
    DialogSearchComponent,
    ProdutoComponent,
    VitrineComponent,
    BuscarComponent,
    ThumbnailComponent,
    ProdutosComponent,
    OrcamentoComponent,
    FooterComponent,
    MedidaCamisetaComponent,
    ComoFuncionaComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,    
    ReactiveFormsModule,
    FormsModule,
    ComponentsModule,
    RequestModule,
    HttpModule,
    AppRoutingModule,
    LazyLoadImageModule,
    LoaderbarModule
  ],
  exports: [
    ComponentsModule
  ],
  providers: [
    RequestService,
    JwtService,
    JwtHelper
  ],
  entryComponents: [DialogSearchComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
