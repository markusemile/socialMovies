import { Validators } from "@angular/forms";

export const CreateMovieForm = {
    id : ['',[Validators.required,Validators.pattern(/0-9/)]],
    title : ['',Validators.required],
    original_title: ['',Validators.required],
    release_date: ['',Validators.required],
    overview:['',[Validators.required,Validators.maxLength(150)]]
}
