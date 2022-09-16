import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { countries } from './dataSet';
import { moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {

  countries: Record<string, string>[] = countries;
  filteredCountries: Record<string, string>[] = [];
  
  randomizeOrder() {
    this.filteredCountries.forEach((_, i) => {
      const rand = Math.round(Math.random() * this.filteredCountries.length);
      moveItemInArray(this.filteredCountries, i, rand);
    });
  }

}
