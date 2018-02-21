import { Component, OnInit } from '@angular/core';
import {NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  signin = false;

  showIn = () => {
    this.signin = true;

  }

  handleOk = (e) => {
    console.log('点击了确定');

    this.signin = false;
  }

  handleCancel = (e) => {
    console.log(e);

    this.signin = false;
  }
  constructor(private confirmServ: NzModalService) { }

  ngOnInit() {
  }

}
