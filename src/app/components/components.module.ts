import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatRadioModule, MatTabsModule, MatListModule, MatProgressBarModule, MatToolbarModule, MatIconModule, MatMenuModule, MatDialogModule, MatCardModule, MatGridListModule, MatAccordion, MatExpansionModule } from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatTabsModule,
    MatListModule,
    MatProgressBarModule,
    MatToolbarModule,
    NoopAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    FlexLayoutModule 
  ],
  exports: [
    MatInputModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatTabsModule,
    MatListModule,
    MatProgressBarModule,
    MatToolbarModule,
    NoopAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    FlexLayoutModule    
  ],
})
export class ComponentsModule { }