import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mod-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class AccordionItemComponent {

@Input('title') title : string|null = null;
@Input('id') id : string|null = null;
@Input('openItem') open : string|null = null;
@Output() toggleTarget: EventEmitter<string> = new EventEmitter();

toggleAccordion(){
    this.toggleTarget.emit(this.getId())
}

getId(){return this.title?.replace(/\s/g,'-')}

}
