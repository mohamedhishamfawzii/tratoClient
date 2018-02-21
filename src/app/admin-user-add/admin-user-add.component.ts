import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-admin-user-add',
  templateUrl: './admin-user-add.component.html',
  styleUrls: ['./admin-user-add.component.css']
})
export class AdminUserAddComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    email: new FormControl(),
    type: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

  _submitNewUser(): void {
    console.log(this.userForm.value);
  }

}
