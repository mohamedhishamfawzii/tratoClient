import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { BranchService } from './branches.service';
import {NzMessageService} from 'ng-zorro-antd';


@Component({
  selector: 'app-admin-branches-add',
  templateUrl: './admin-branches-add.component.html',
  styleUrls: ['./admin-branches-add.component.css']
})
export class AdminBranchesAddComponent implements OnInit {
  branchesForm = new FormGroup({
    name: new FormControl(),
    cont1: new FormControl(),
    cont2: new FormControl(),
    cont3: new FormControl(),
    details: new FormControl(),
    location: new FormGroup({
      lon: new FormControl(),
      lat: new FormControl()
    }),
    user_id: new FormControl()
  });
  isLoading = false;
  contactSize = {
    minRows: 2,
    maxRows: 6
  };

  constructor(private _message: NzMessageService, private branchService: BranchService) { }

  ngOnInit() {
  }

  _submitNewBranch(): void {
    this.isLoading = true;
    this._message.info("Adding New Branch");
    const body = {
      name: this.branchesForm.value.name,
      location: [
        this.branchesForm.value.location.lat,
        this.branchesForm.value.location.lon
      ],
      details: this.branchesForm.value.details,
      seller: this.branchesForm.value.user_id,
      contacts: [
        this.branchesForm.value.cont1,
        this.branchesForm.value.cont2,
        this.branchesForm.value.cont3
      ]
    };
    this.branchService.addBranch(body, this.branchesForm.value.user_id).then(res => {
      console.log(res);
    });

  }
}
