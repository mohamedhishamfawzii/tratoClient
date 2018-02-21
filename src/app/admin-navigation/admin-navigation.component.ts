import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.css']
})
export class AdminNavigationComponent implements OnInit {
    isOpenOne = true;
    isOpenTwo = false;
    isOpenThree = false;
    isOpenFour = false;
    isOpenFive = false;

  constructor() { }

  ngOnInit() {
  }

 openChange(value) {
   if (value === 'one') {
     this.isOpenTwo = false;
     this.isOpenThree = false;
     this.isOpenFour = false;
     this.isOpenFive = false;
   } else if (value === 'two') {
     this.isOpenOne = false;
     this.isOpenThree = false;
     this.isOpenFour = false;
     this.isOpenFive = false;
   } else if (value === 'three') {
     this.isOpenOne = false;
     this.isOpenTwo = false;
     this.isOpenFour = false;
     this.isOpenFive = false;
   } else if (value === 'four') {
     this.isOpenOne = false;
     this.isOpenTwo = false;
     this.isOpenThree = false;
     this.isOpenFive = false;
   } else if (value === 'five') {
     this.isOpenOne = false;
     this.isOpenTwo = false;
     this.isOpenThree = false;
     this.isOpenFour = false;
   }
 }
}
