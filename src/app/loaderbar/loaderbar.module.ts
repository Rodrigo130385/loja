import { LoaderbarComponent } from './loaderbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderbarService } from './loaderbar.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
  declarations: [
    LoaderbarComponent
  ],
  exports: [LoaderbarComponent],
  providers: [
    LoaderbarService
  ]
})
export class LoaderbarModule { }
