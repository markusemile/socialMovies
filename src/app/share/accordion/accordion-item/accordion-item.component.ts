import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mod-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class AccordionItemComponent {

@Input('title') title : string|null = null;
@Input('id') id : string|null = null;
@Input() first : boolean|null = null;
@Input('openItem') open : string|null = null;

toggleAccordion(event : any){
   // this.toggleTarget.emit(this.getId())
  let t = event.target.parentElement.id;
  document.querySelector('#'+t+" .accordion-body")?.classList.toggle('accordion-open'); 
}

getId(){return this.id?.replace(/\s/g,'-')}}
