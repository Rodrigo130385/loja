import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dialog-search',
  templateUrl: './dialog-search.component.html',
  styleUrls: ['./dialog-search.component.css']
})



export class DialogSearchComponent implements OnInit {

  formBuscar: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog
  ){}

  
  ngOnInit(){
    this.formBuscar = this.formBuilder.group({ 
      buscar: ['', Validators.required]
    });
  }

  submit(){
    if( this.formBuscar.valid ){
      const buscar = this.formBuscar.get('buscar').value;
      this.router.navigate(['buscar'], {queryParams:{b: encodeURI(buscar) }} );
    }

    //[mat-dialog-close]="true"
    this.dialog.closeAll();

  }

}

