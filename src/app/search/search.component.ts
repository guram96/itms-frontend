import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  options: string[] = ['One', 'Two', 'Three'];
  myControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
