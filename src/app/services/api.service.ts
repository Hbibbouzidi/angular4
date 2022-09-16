import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  users: string[]=[];

  data!: Observable<string>;

  constructor() {
    this.users=["ahmed", "yassin", "saif", "ala"];
  }

  getUsers(){
    return this.users;
  }

  getAllUsers(){
    this.data = new Observable(observer =>{
      setTimeout(()=>{
        observer.next('Aicha')
      },1000);
      setTimeout(()=>{
        observer.next("Rebh")
      },2000);
      setTimeout(()=>{
        observer.next("Nourdine")
      },3000);
      setTimeout(()=>{
        observer.next("Ferdaws")
      },4000);
      setTimeout(()=>{
        observer.next("Jamila")
      },5000);
      setTimeout(()=>{
        observer.next("Jihed")
      },6000);
      setTimeout(()=>{
        observer.next("Monia")
      },7000);
    });
    return this.data;
  }
}
