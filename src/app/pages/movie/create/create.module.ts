import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { ApiSearchComponent } from './api-search/api-search.component';


@NgModule({
  declarations: [
  ApiSearchComponent,

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,

    
  ],exports:[
    ApiSearchComponent,

  ]
})
export class CreateModule { }
