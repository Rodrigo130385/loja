import { Component, OnInit } from '@angular/core';
  import { RequestService } from '../request/request.service';
  
  @Component({
    selector: 'app-vitrine',
    templateUrl: './vitrine.component.html',
    styleUrls: ['./vitrine.component.css']
  })
  export class VitrineComponent implements OnInit {
    inscricao: any = [];
    data: any = [];
  
    produtos: any = [];
  
    offset: number;
    defaultImage: string;
  
    constructor(
      private request: RequestService
    ) { }
  
    ngOnInit() {
      this.offset = 100;
      this.defaultImage = '/assets/img/loading-rosa.gif';
      this.getProdutos();
    }
  
    getProdutos() {
  
      this.inscricao = this.request.get(
        "produto"
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
        this.produtos = data['resposta'];
      }
  
  
    }
  
  
  }
  