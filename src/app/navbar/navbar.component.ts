import { Component, OnInit } from '@angular/core';
import { DialogSearchComponent } from '../dialog-search/dialog-search.component';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
 
  fileNameDialogRef: MatDialogRef<DialogSearchComponent>;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  openDialog(): void {
    this.fileNameDialogRef = this.dialog.open( DialogSearchComponent,
      { 
        width: '500px' 
      }
    );
  }

  closeDialog(): void {
    this.fileNameDialogRef.close();
  }

}

