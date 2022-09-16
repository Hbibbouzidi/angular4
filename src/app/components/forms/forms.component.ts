import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  name: string="Katashi";
  address: string="Japan";
  age: number =21;
  active: boolean = true;

  item: string="";
  items: string[]=["Java", "C#", "JS", "C++"];

  mySubmit(){
    this.items.push(this.item);
    this.item="";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
