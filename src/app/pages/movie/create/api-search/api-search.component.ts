import { Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdbApiConnectionService } from 'src/app/services/mdb-api-connection.service';
import { ImportMList } from '../../models/import-mlist';

@Component({
  selector: 'app-api-search',
  templateUrl: './api-search.component.html',
  styleUrls: ['./api-search.component.scss']
})
export class ApiSearchComponent {


  @Input('search') search: string = '';
  @Output() fillForm = new EventEmitter<number>();

  movieList: ImportMList[] = [];

  searchForm: FormGroup = this._fb.group({
    search: ['', Validators.required],

  });


  constructor(
    private _fb: FormBuilder,
    private service: MdbApiConnectionService) { 
  }

  searchMovie(): void {
    this.movieList = [];
    this.service.getMovie(this.search).subscribe((movies: any) => {
      movies.results.forEach((movie: ImportMList) => {
        let f: ImportMList = { id: movie.id, title: movie.title, release_date: movie.release_date };
        this.movieList.push(f);
      })
    });
    console.log(this.movieList);  
  }

  getMovieInfo(){
     this.fillForm.emit(this.movieList[0].id);
  }

}
