import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ImportMList } from '../pages/movie/models/import-mlist';

@Injectable({
  providedIn: 'root'
})
export class MdbApiConnectionService {

  constructor(private http : HttpClient) { }
  apikey = environment.apiKey3;

public getMovie(keyword:string):any{
  let query = "";
  query+="?api_key="+this.apikey+"&query="+keyword+"&page=1&language=fr-FR";  
  try {
    return this.http.get<ImportMList>(environment.mdbMovie+query);
  } catch (error) {
    console.error(error);    
  }
}

public getMovieDetail(num : number):any{
  let query ="";
  query+=num+"?api_key="+this.apikey+"&language=fr-FR";
  try{
    return this.http.get(environment.mdbMovieDetails+query);
  }catch(error){
    console.error(error);
    
  }
}


}
