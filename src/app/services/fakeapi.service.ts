import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FakeapiService {

  constructor(public http: HttpClient) { }

  getPersons(): Observable<[]>{
    return this.http.get<[]>("https://jsonplaceholder.typicode.com/users");
  }
  addPerson(data: any): Observable<[]>{
    return this.http.post<[]>("https://jsonplaceholder.typicode.com/users/posts", data);
  }

}
