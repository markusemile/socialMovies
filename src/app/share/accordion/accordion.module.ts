import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';




@NgModule({
  declarations: [
    AccordionItemComponent,

  ],
  imports: [
    CommonModule
  ],
  exports:[
    AccordionItemComponent
  ]
})
export class AccordionModule { }
