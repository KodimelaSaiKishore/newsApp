import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = environment.apiUrl;
  apiKey = environment.apiKey;
  payload = "v2/top-headlines?country=in&"

  api = "https://newsapi.org/v2/top-headlines?country=in&apiKey=f3760e417a074919bf83d9fd9b15e35b";

  constructor(private http:HttpClient) { }

  headLineNews():Observable<any>{
    return this.http.get(this.api);
  }
}
