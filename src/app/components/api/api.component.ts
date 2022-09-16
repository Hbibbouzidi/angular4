import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  users: string[]=[];
  data: string[]=[];
  constructor(public apiService: ApiService) { 
    this.users = apiService.getUsers();
    this.apiService.getAllUsers().subscribe(data=>{
      this.data.push(data);
    })
  }

  ngOnInit(): void {
  }

}
