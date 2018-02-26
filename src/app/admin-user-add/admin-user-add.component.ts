import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';
import {UserService} from './admin-user-add.service';

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
    type: new FormControl(),
    cont1: new FormControl(),
    cont2: new FormControl(),
    cont3: new FormControl()
  });
  isLoading = false;

  constructor(private _message: NzMessageService, private service: UserService) { }

  ngOnInit() {
  }

  _submitNewUser(): void {
    this.isLoading = true;
    this._message.info('Adding User');
    console.log(this.userForm.value);
    const body = {
      name: this.userForm.value.name,
      contacts: [
        this.userForm.value.cont1,
        this.userForm.value.cont2,
        this.userForm.value.cont3
      ],
      username: this.userForm.value.username,
      password: this.userForm.value.password,
      email: this.userForm.value.email,
      user_type: this.userForm.value.type
    };
    console.log(body);
    this.service.addUser(body).then(res => {
      console.log(res);
      this._message.info('User Added Successfully !');
      this.isLoading = false;
    });
  }

}
