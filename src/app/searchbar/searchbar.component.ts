import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
selectedOption;
categories;
  constructor() { }
  _value = '';

  onSearch(event: string): void {
    console.log(event);
  }
  ngOnInit() {
    setTimeout(_ => {
      this.categories = [
        { value: 'electronics', label: 'Electronics' },
        { value: 'food', label: 'Food' },

      ];
    }, 100);
  }

}
