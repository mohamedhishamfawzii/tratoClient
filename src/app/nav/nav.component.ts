import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  signin = false;
  selectedOption;
    searchOptions;
    searchOptions2;
  showIn = () => {
    this.signin = true;

  }

  handleOk = (e) => {
    console.log('test');
    this.router.navigateByUrl('admin/seller/add');
    this.signin = false;
  }

  handleCancel = (e) => {
    console.log(e);

    this.signin = false;
  }
  constructor(private confirmServ: NzModalService, private router: Router) { }

  ngOnInit() {
    setTimeout(_ => {
     this.searchOptions = [
       { value: 'ar', label: 'Arabic' },
       { value: 'en', label: 'English' },

     ];
     this.searchOptions2 = [
       { value: 'egp', label: 'EGP' },
       { value: 'usd', label: 'USD' },

     ];
   }, 100);


  }

}
