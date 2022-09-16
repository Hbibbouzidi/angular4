import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user={
    name:"",
    username:"",
    email:"",
    phone:""
  }
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

}
