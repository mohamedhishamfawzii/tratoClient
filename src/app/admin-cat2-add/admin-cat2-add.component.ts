import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-admin-cat2-add',
  templateUrl: './admin-cat2-add.component.html',
  styleUrls: ['./admin-cat2-add.component.css']
})
export class AdminCat2AddComponent implements OnInit {

  cat2Form = new FormGroup({
    name: new FormControl(),
    parent_id: new FormControl()
  });
  constructor() { }

  ngOnInit() {
  }

  _submitNewCat2(): void {
    console.log(this.cat2Form.value);
  }
}
