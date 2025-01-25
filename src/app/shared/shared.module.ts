import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { MaterialModule } from '../material/material.module';
import { CardOrdersComponent } from './components/card-orders/card-orders.component';
import { SplitTextPipe } from './pipes/split-text.pipe';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputSearchComponent,
    CardOrdersComponent,
    SplitTextPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    InputSearchComponent,
    CardOrdersComponent,
    SplitTextPipe
  ]
})
export class SharedModule { }
