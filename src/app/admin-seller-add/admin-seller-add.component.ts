import { Component, OnInit } from '@angular/core';
import { AdminNavigationComponent } from '../admin-navigation/admin-navigation.component';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { SellerService } from './admin-seller-add.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-admin-seller-add',
  templateUrl: './admin-seller-add.component.html',
  styleUrls: ['./admin-seller-add.component.css']
})
export class AdminSellerAddComponent implements OnInit {

  sellerForm = new FormGroup({
    name: new FormControl(),
    cat1: new FormControl(),
    cat2: new FormControl(),
    cont1: new FormControl(),
    cont2: new FormControl(),
    cont3: new FormControl()
  });
  isLoading = false;
  
  noteSize = {
    minRows: 2,
    maxRows: 6
  };

  contactSize = {
    minRows: 2,
    maxRows: 6
  };

  constructor(private _message: NzMessageService, private sellerService: SellerService) { }

  ngOnInit() {
  }

  _submitNewSeller(): void {
    this.isLoading = true;
    this._message.info('Adding New Seller');
    const body = {
      name: this.sellerForm.value.name,
      main_category: this.sellerForm.value.cat1,
      sub_category: this.sellerForm.value.cat2,
      contacts: [
        this.sellerForm.value.cont1,
        this.sellerForm.value.cont2,
        this.sellerForm.value.cont3
      ]
    };

    console.log(body);
    this.sellerService.addSeller(body).then(res => {
      this.isLoading = false;
      this._message.info('Success');
      console.log(res);
    });
  }
}
