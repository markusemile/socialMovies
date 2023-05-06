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

public getMovie(keyword:string):any{
  let query = "";
  const apikey = environment.apiKey3;
  query+="?api_key="+apikey+"&query="+keyword+"&page=1&language=fr-FR";  
  try {
    return this.http.get<ImportMList>(environment.mdbMovie+query);
  } catch (error) {
    console.error(error);    
  }
}

}
