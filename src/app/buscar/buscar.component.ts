import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RequestService } from '../request/request.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-buscar',
  templateUrl: '../vitrine/vitrine.component.html',
  styleUrls: ['../vitrine/vitrine.component.css']
})
export class BuscarComponent implements OnInit, OnDestroy {
  inscricao: any = [];
  data: any = [];

  produtos: any = [];

  offset: number;
  defaultImage: string;

  busca: string;

  subs: Subscription;

  showMensagem: boolean;

  constructor(
    private request: RequestService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.showMensagem = false;
    this.offset = 100;
    this.defaultImage = '/assets/img/loading-rosa.gif';

    this.subs = this.route.queryParams.subscribe(
      (queryParams:any) => {
        this.getProdutos(queryParams['b']);
      }
    )
    
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

  getProdutos(busca) {
    
    this.inscricao = this.request.get(
      "produto?b="+busca
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
      this.showMensagem = false;
      this.produtos = data['resposta'];
    }else{
      this.produtos = [];
      this.showMensagem = true;
    }


  }


}
