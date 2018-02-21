import { Component, OnInit } from '@angular/core';
import { AdminNavigationComponent } from '../admin-navigation/admin-navigation.component';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-admin-seller-add',
  templateUrl: './admin-seller-add.component.html',
  styleUrls: ['./admin-seller-add.component.css']
})
export class AdminSellerAddComponent implements OnInit {

  sellerForm = new FormGroup({
    name: new FormControl(),
    address: new FormControl(),
    note: new FormControl(),
    contact: new FormControl(),
    cat1: new FormControl(),
    cat2: new FormControl()
  });

  noteSize = {
    minRows: 2,
    maxRows: 6
  };

  contactSize = {
    minRows: 2,
    maxRows: 6
  };

  constructor() { }

  ngOnInit() {
  }

  _submitNewSeller(): void {

    console.log(this.sellerForm.value);
  }
}
