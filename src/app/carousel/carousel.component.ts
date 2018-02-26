import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  array;

  constructor() { }

  ngOnInit() {
    setTimeout(_ => {
      this.array = [ '../assets/2.jpg', '../assets/3.jpg', '../assets/4.jpg' ];
    }, 100);
  }
}
