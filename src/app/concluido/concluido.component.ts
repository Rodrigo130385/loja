import { Router, ActivatedRoute} from '@angular/router';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-concluido',
  templateUrl: './concluido.component.html',
  styleUrls: ['./concluido.component.css']
})
export class ConcluidoComponent implements OnInit, OnDestroy {


  mensagem: string;
  routerBack: string;

  subs: Subscription

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}


  setMensagem(mensagem){
    this.mensagem =  decodeURI(mensagem);
    if( this.mensagem === '' || typeof this.mensagem === 'undefined' ){
      this.mensagem = 'Concluído!';
    }
  }

  ngOnInit(){
    this.subs = this.activatedRoute.queryParams.subscribe(
      (queryParams:any) => {
        this.setMensagem( queryParams['msg'] );
      }
    )
  }

  ngOnDestroy(){
    if( this.subs !== undefined){
      this.subs.unsubscribe();
    }
  }

  backPage(){
    this.location.back();
  }

}
