import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  user={
    name:"",
    address: "",
    age: 0,
    active: true
  }
  
  name: string="";
  address: string="";
  age: number=0;

  constructor() { }

  mySubmit({value, valid}: any){
    if(valid){
      this.name=value.name;
      this.address=value.address;
      this.age = value.age;
    }else{
      this.name="not valid";
      this.address="not valid";
      this.age=0;
    }
  }

  ngOnInit(): void {
  }

}
