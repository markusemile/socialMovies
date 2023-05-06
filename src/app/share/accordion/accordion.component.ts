import { ChangeDetectorRef } from '@angular/core';
import { Component,Input, SimpleChange } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'mod-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {


  @Input() openItem : string|null = null ;
  @Input() id : string|null = null;

  currentOpen : string|null = null;

  ngOnInit(){
    if(this.currentOpen==null){
      
      let defOpen = document.querySelector("#"+this.id+" mod-accordion-item .accordion-body")           
      console.log(document.querySelector("#"+this.id+" mod-accordion-item .accordion-body"));
      if(defOpen){  
        defOpen.classList.add("accordion-open");
        if(defOpen.parentElement){
          this.openItem=defOpen.parentElement.id;
          this.currentOpen=defOpen.parentElement.id;          
        }else{
          console.error("Error 'accordion.component' line 21 - No parent Element");          
        }        
      }else{
        console.error("Error 'accordion.component' line 27 - Accordion component need a id name !!");        
      }     
    }
  }   
}
