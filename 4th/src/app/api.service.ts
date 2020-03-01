import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  uri: string = "http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false";
  //uri: string = "assets/data/pics.json";

  constructor(private http: HttpClient) { }

  getImages(): Observable<any> {
    return this.http.get<any>(this.uri)
  }

}
