import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionModule } from './accordion/accordion.module';


@NgModule({
  declarations: [  
    AccordionComponent, 
 

  ],
  imports: [
    CommonModule,
    AccordionModule
  ],
  exports:[
    AccordionComponent,
  ]
})
export class ShareModule { }
