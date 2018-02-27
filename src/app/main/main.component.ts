import { Component, OnInit } from '@angular/core';
import {MainService} from './main.service';
import {Category} from '../classes/category';
import {Seller} from '../classes/seller';
import {Branch} from '../classes/branch';
import index from '@angular/cli/lib/cli';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
counter = 0 ;
  response: any ;
  nzTabPosition = 'left';
  mainCats: Category[];
  branches: Branch[];
  showBranches=false;
  selected = 0 ;
  selectedsub=0;
  constructor(private service: MainService) {
  }

  ngOnInit() {
    this.service.getMainCats().then((res) => {
      this.response = res.body;
      if (res.valid) {
        this.mainCats = this.response as Category[];
       // this.getSubsOfMain();
      }});
  }

  getSubsOfMain() {
    console.log("called"+this.selected);
    this.service.getSubCats(this.mainCats[this.selected]._id).then((res) => {
      this.response = res.body;
      if (res.valid) {
        this.mainCats[this.selected].sub_cat = this.response as Category[];
      }
    });
  }
  getSellerofSub(){
    console.log("called"+this.selectedsub);
    this.service.getSellerCats(this.mainCats[this.selected].sub_cat[this.selectedsub]._id).then((res) => {
      this.response = res.body;
      if (res.valid) {
        this.mainCats[this.selected].sub_cat[this.selectedsub].sellers = this.response as Seller[];
      }
    });

  }
  handleOk = (e) => {
    this.showBranches = false;
  }

  handleCancel = (e) => {
    this.showBranches = false;
  }
  show(id: string) {
    this.showBranches = true;
    this.service.getBranches(id).then((res) => {
      this.response = res.body;
      if (res.valid) {
        this.branches = this.response as Branch[];
      }
    });

  }

}


