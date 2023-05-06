import { ChangeDetectorRef } from '@angular/core';
import { Component,Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'mod-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

  @Input() openItem : string|null = null ;
  @Input() id : string|null = null;
  currentOpen :any|null = null;

  ngOnChanges(changes:SimpleChange){
    if(changes.previousValue ==null){
        const n = "#"+this.openItem+"-body";        
        const target = document.querySelector(n); 
 
      }
    }
    
  



}
