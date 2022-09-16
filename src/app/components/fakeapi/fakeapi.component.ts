import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FakeapiService } from 'src/app/services/fakeapi.service';

@Component({
  selector: 'app-fakeapi',
  templateUrl: './fakeapi.component.html',
  styleUrls: ['./fakeapi.component.css']
})
export class FakeapiComponent implements OnInit {

  data: any[]=[];

  constructor(private fakeapiService: FakeapiService) {
    this.fakeapiService.getPersons().subscribe(data=>{
      this.data=data;
    })
  }

  ngOnInit(): void {
  }

}
