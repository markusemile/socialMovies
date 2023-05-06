import { Input,Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MdbApiConnectionService } from 'src/app/services/mdb-api-connection.service';
import { CreateMovieForm } from '../forms/create-movie';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  form: FormGroup = this._fb.group(CreateMovieForm);
  @Input() accordionOpenItem :string|null = null;
  
  constructor(
    private _fb : FormBuilder,
    private service : MdbApiConnectionService
  ){ }

  fillForm(id : number){
    console.log(this.form);
  }

  toggleTarget(elem : any){
   this.accordionOpenItem=elem;
    console.log(elem);
    
  }

}
