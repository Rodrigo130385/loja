import { LoaderbarService } from './../loaderbar/loaderbar.service';
import { JwtService } from './../jwt/jwt.service';
import { Observable } from 'rxjs/Rx';
import { Http, RequestOptions, Headers, ResponseContentType } from '@angular/http';
import { Injectable, EventEmitter} from '@angular/core';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/share'
import 'rxjs/add/operator/finally';

import { AuthHttp } from 'angular2-jwt';
import { Router } from '@angular/router';



@Injectable()
export class RequestService {

  api: string = 'https://apiweb.websiteseguro.com/loja/';

  constructor(
    protected http: Http,
    public authHttp: AuthHttp,
    private jwtService: JwtService,
    private loaderbarService: LoaderbarService,
    private router: Router
  ) {}

 

  showLoader(): void{   
    console.log("Loader On");
    this.loaderbarService.show();
  }

  hideLoader(): void{
    console.log("Loader Off");
    this.loaderbarService.hide();
  }

  
  


  myHeader(){
    if( this.jwtService.matchToken() && this.jwtService.tokenExpValido() ){
      let myHeader = new Headers();
      myHeader.append("IDEmpresa", this.jwtService.getIDEmpresa() );
      return myHeader;
    }else{
      //this.fazerLogout();
      this.router.navigate(['/concluido'], {queryParams:{msg: encodeURI("Sessão expirada! Por favor, refaça a transação!") }} );
    }    
  }

  
  post(url,dados): Observable<any> {
    this.showLoader();
    /*if( localStorage.getItem("token") == null ){
      window.location.href = "/login";      
    }*/
    return this.http.post(this.api + url, dados )
    .map( res => res.json() )
    .share()
    .finally(() => {
      this.hideLoader();
    });
  }

  get(url): Observable<any> {
    this.showLoader();
    /*if( localStorage.getItem("token") == null ){
      window.location.href = "/login";      
    }*/
    return this.http.get(this.api + url )
    .map( res => res.json() )
    .share()
    .finally(() => {
      this.hideLoader();
    });
  }

  getTokenJWT(url,dados): Observable<any> {
    this.showLoader();    
    return this.http.post(this.api + url, dados )
    .map( res => res.json() )
    .share()
    .finally(() => {
      this.hideLoader();
    });
  }


}
