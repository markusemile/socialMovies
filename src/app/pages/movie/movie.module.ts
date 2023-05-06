import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateModule } from './create/create.module';
import { ShareModule } from 'src/app/share/share.module';
import { AccordionModule } from 'src/app/share/accordion/accordion.module';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CreateModule,
    ReactiveFormsModule,
    MovieRoutingModule,
    AccordionModule,
    ShareModule
  ],
  exports: [
    ListComponent
  ]
})
export class MovieModule { }
