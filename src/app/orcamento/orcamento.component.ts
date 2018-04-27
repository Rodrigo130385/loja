import { RequestService } from './../request/request.service';
import { Component, OnInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


declare var $: any;

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.css']
})
export class OrcamentoComponent implements OnInit, AfterViewChecked, OnDestroy {

  formOrcamento: FormGroup;
  inscricao: Subscription;
  subs: Subscription;
  inputTel: boolean = false;

  assunto: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private request: RequestService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngAfterViewChecked() {
    $(this).setMask();
  }

  ngOnDestroy(){
    if( this.inscricao != undefined){
      this.inscricao.unsubscribe();
    }

    if( this.subs != undefined){
      this.subs.unsubscribe();
    }
  }

  ngOnInit() {

    this.subs = this.activatedRoute.params.subscribe(
      (params:any) => {
        this.setAssunto(params['tipo']);
      }
    )

    this.formOrcamento = this.formBuilder.group({
      nome: ['', [Validators.required] ],
      email: ['', [Validators.required] ],
      telefone: ['', [Validators.required] ],
      contato: ['', [Validators.required] ],
      mensagem: ['', [Validators.required] ],
      assunto: ['']
    });

  }

  setAssunto(assunto){
    this.assunto = assunto; 
    if( this.assunto !== '' ){
      if( Number.isInteger( parseInt(assunto) ) ){
        //console.log("É numero")
      }else{
        //console.log("É string")
      }
    }else{
      this.assunto = 'Direto';
    }
  }

  submit(){    
    if( this.formOrcamento.valid ){
      this.formOrcamento.get('assunto').setValue(this.assunto);
      this.inscricao = this.request.post("sendemail", this.formOrcamento.value ).subscribe(
        data => {
          this.responseSubmit(data);
        },
        error => {
          this.responseSubmit([]);       
        }
      );      
    }
  }

  responseSubmit(response){
    //console.log( response );
    let mensagem = '';
    if(response['status'] === 200 ){
      const tpContato = 'por ' + this.formOrcamento.get('contato').value;
      mensagem = 'Obrigado, em instante retornaremos seu contato '+tpContato+'!' ;      
    }else{
      mensagem = 'Ops! Não foi possível enviar seu orçamento!'
    }
    this.router.navigate(['/concluido'], {queryParams:{msg: encodeURI(mensagem) }} );
  }

  tipoRetorno(event){
    this.inputTel = ( event.value === 'whatsapp' || event.value === 'ligação' );
    if( this.inputTel ){
      this.formOrcamento.get('telefone').enable();
      this.formOrcamento.get('email').disable();
    }else{
      this.formOrcamento.get('email').enable();
      this.formOrcamento.get('telefone').disable();
    }
  }

}
