import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RequestService } from '../request/request.service';

interface ivariante{
  variante_conteudo: string;  ​​
  variante_desc: string;  ​​
  variante_id: string;  ​​
  variante_loja_id: string;  ​​
  variante_valor1: string;  ​​
  variante_valor2: string;  ​​
  variantes: any;
}


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProdutoComponent implements OnInit {

  id: any;
  inscricao: any = [];
  data: any = [];
  produto: any = [];
  imagens: any = [];
  imagemNome: string;
  variantes: any = [];

  produtoVariante: any = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private request: RequestService
  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    if( this.id != '' ){
      this.getProduto( this.id );
      this.getImagens( this.id );
    }
  }


  getProduto(id) {

    this.inscricao = this.request.get(
      "produto?id="+id
    ).subscribe(
      data => {
        this.data = data;
        this.responseProdutos(this.data);
      },
      error => {
        alert("Erro");
      }
      );
  }

  responseProdutos(data){
    if( data['status'] === 200 ){
      this.produto = data['resposta'][0];
      this.imagemNome = data['resposta'][0]['imagem_nome'];

      this.produtoVariante = JSON.parse( data['resposta'][0]['produto_variantes'] );
      if( this.produtoVariante != null ){
        for( let i=0; i<this.produtoVariante.length; i++){
          this.getVariantes(this.produtoVariante[i]);
        }
      }
    }
  }


  getImagens(id) {
    
        this.inscricao = this.request.get(
          "imagem?id="+id
        ).subscribe(
          data => {
            this.data = data;
            this.responseImagens(this.data);
          },
          error => {
            alert("Erro");
          }
          );
      }
    
      responseImagens(data){
        if( data['status'] === 200 ){
          this.imagens = data['resposta'];
        }
      }

      showThisImg(imagemNome){
        this.imagemNome = imagemNome;
      }

      getVariantes(id) {
        
            this.inscricao = this.request.get(
              "variante?id="+id
            ).subscribe(
              data => {
                this.data = data;
                this.responseVariantes(this.data);
              },
              error => {
                alert("Erro");
              }
              );
          }

          
          
          arrVariantes: any[] = [];
          responseVariantes(data){
            
            if( data['status'] === 200 ){
              this.variantes = data['resposta'];
              let arr = [];
              Object.keys(this.variantes[0]).forEach( key => {
                arr[key] = this.variantes[0][key];
                //console.log(this.variantes[0][key]);
                //console.log(key);
              });              
              this.arrVariantes.push(arr);
            }
          }

}
