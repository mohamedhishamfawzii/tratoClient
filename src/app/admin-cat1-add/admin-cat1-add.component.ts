import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { CategoryService } from './cat1.service';
import {NzMessageService} from 'ng-zorro-antd';
import {FileUploadService} from './../file-upload.service';

@Component({
  selector: 'app-admin-cat1-add',
  templateUrl: './admin-cat1-add.component.html',
  styleUrls: ['./admin-cat1-add.component.css']
})
export class AdminCat1AddComponent implements OnInit {
  isLoading = false;
  fileList;
  cat1Form = new FormGroup({
    name: new FormControl()
  });
  constructor(private _message: NzMessageService, private categoryService: CategoryService, private fileUpload: FileUploadService) { }

  ngOnInit() {
  }

  _submitNewCat1(): void {
    this.isLoading = true;
    this._message.info('Adding Maincategory!');
    const body = {
      name: this.cat1Form.value.name,
      main_type: true
    }
    this.categoryService.addCat1(body).then(res => {
      //this.isLoading = false;
      console.log(res);
      if (res.valid) {
        this.fileUpload.uploadFile('category', this.fileList, res.body._id).then(fileRes => {
          console.log('asdsadsad', fileRes);
          if (fileRes.valid){
            this.isLoading = false;
            this._message.info('Category Added Successfully');
          }
        });
      }
    });
  }

  handleChange(event) {
    console.log('ev fl', event.target.files);
    this.fileList = event.target.files;
    console.log('fl fl ', this.fileList);
  }
}
