import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-admin-cat1-add',
  templateUrl: './admin-cat1-add.component.html',
  styleUrls: ['./admin-cat1-add.component.css']
})
export class AdminCat1AddComponent implements OnInit {
  cat1Form = new FormGroup({
    name: new FormControl()
  });
  constructor() { }

  ngOnInit() {
  }

  _submitNewCat1(): void {
    console.log(this.cat1Form.value);
  }
}
