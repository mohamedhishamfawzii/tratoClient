import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  validateForm: FormGroup;
  _submitForm() {
    // for (const i in this.validateForm.controls) {
    //   this.validateForm.controls[ i ].markAsDirty();
    // }
    this.router.navigateByUrl('admin/seller/add');
  }
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ],
    });
  }

}
