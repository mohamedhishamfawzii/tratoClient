import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-admin-branches-add',
  templateUrl: './admin-branches-add.component.html',
  styleUrls: ['./admin-branches-add.component.css']
})
export class AdminBranchesAddComponent implements OnInit {
  branchesForm = new FormGroup({
    name: new FormControl(),
    contacts: new FormControl(),
    location: new FormGroup({
      lon: new FormControl(),
      lat: new FormControl()
    }),
    user_id: new FormControl()
  });
  constructor() { }

  ngOnInit() {
  }

  _submitNewBranch(): void {
    console.log(this.branchesForm.value);
  }
}
