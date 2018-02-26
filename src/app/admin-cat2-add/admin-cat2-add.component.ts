import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import {CategoryService} from './../admin-cat1-add/cat1.service';
import {MainService} from './../main/main.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-admin-cat2-add',
  templateUrl: './admin-cat2-add.component.html',
  styleUrls: ['./admin-cat2-add.component.css']
})
export class AdminCat2AddComponent implements OnInit {
  isLoading = false;
  categories = [];
  cat2Form = new FormGroup({
    name: new FormControl(),
    parent_id: new FormControl()
  });
  constructor(private _message: NzMessageService, private categoryService: CategoryService, private mainService: MainService) { }

  ngOnInit() {
    this.mainService.getMainCats().then(res => {
      // console.log(res);
      // const cats = JSON.parse(res);
      console.log("ACACC", res.body);
      this.categories = res.body;
    });
  }

  _submitNewCat2(): void {
    this._message.info('Adding Subcategory');
    this.isLoading = true;
    const body = {
      name: this.cat2Form.value.name,
      parent_category: this.cat2Form.value.parent_id,
      main_type: false
    };
    this.categoryService.addCat2(body, this.cat2Form.value.parent_id).then(res => {
      this.isLoading = false;
      console.log(res);
    });
  }
}
