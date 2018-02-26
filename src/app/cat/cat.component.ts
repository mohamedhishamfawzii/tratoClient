import { Component, OnInit } from '@angular/core';
import {Category} from '../classes/category';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
categores: Category [];
  nzTabPosition = 'left';
  constructor() { }

  ngOnInit() {
  }

}
