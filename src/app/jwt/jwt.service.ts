import { Injectable, EventEmitter } from '@angular/core';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class JwtService {

    dadosTokenEmitter = new EventEmitter<any>();

    private token: string;

    dados: any = [];

    constructor(
      protected jwtHelper: JwtHelper,
    ) {}
  
    setToken( token ){
      this.token = token;
      localStorage.setItem('token', this.token);
    }
  
    getToken(){
      return this.token;
    }

    removeToken(){
      localStorage.removeItem("token");
    }

    matchToken(){
        return (localStorage.getItem("token") === this.getToken());
    }


    estractToken(){        
        let token = localStorage.getItem('token');
    
        if( token != null ){
          let jwtHelper: JwtHelper = new JwtHelper();
          let varsToken = jwtHelper.decodeToken(token);

    
          this.dados['Numra']           = varsToken['Numra'];
          this.dados["IDParcela"]       = varsToken["IDParcela"];
          this.dados["TotalParcela"]    = varsToken["TotalParcela"];
          this.dados["Valor"]           = varsToken["Valor"];
          this.dados["Nome"]            = varsToken["Nome"];
          this.dados["CPF"]             = varsToken["CPF"];
          this.dados["Email"]           = varsToken["Email"];
          this.dados["IDEmpresa"]       = varsToken["IDEmpresa"];

          this.dados["idtoken"]         = varsToken["idtoken"];    
          this.dados["exp"]             = varsToken["exp"];
          this.dados["gertoken"]        = varsToken["gertoken"];
          
          let idempresa = localStorage.getItem('empresa');
          
          if( idempresa == null ){
            //this.setThisEmpresa(this.dados["idempresa"]);
          }
    
          this.dadosTokenEmitter.emit( this.dados );
        }
      }

    getIDEmpresa(){
      return this.dados["IDEmpresa"];
    }

    getValorCentavos(){
      let valor = parseFloat(this.dados["Valor"]) * 100;
      return (valor.toString()).replace(',','').replace('.','');
    }

    getTotalParcela(){
      return parseInt( this.dados["TotalParcela"] );
    }

    getIDParcela(){
      return this.dados['IDParcela'];
    }

    tokenExpValido(){
      return tokenNotExpired();
    }

}