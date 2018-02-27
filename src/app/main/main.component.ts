import { Component, OnInit } from '@angular/core';
import {MainService} from './main.service';
import {Category} from '../classes/category';
import {Seller} from '../classes/seller';
import {Branch} from '../classes/branch';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  response: any ;
  nzTabPosition = 'left';
  mainCats: Category[];
  subCats: Category[];
  sellers: Seller [];
  branches: Branch[];
  constructor(private service: MainService) {
  }

  ngOnInit() {
    this.service.getMainCats().then((res) => {
      this.response = res.body;
      if (res.valid) {
        this.mainCats = this.response as Category[];
      }
      console.log("after getting the maincats",this.mainCats);
      for (const parent of this.mainCats) {
        this.service.getSubCats(parent._id).then((res1) => {
          this.response = res1.body;
          if (res1.valid) {
            parent.sub_cat = this.response as Category[];
          }
        });
        console.log("after getting the subs in themains",this.mainCats);
        this.service.getSellerCats(parent._id).then((res1) => {
          this.response = res1.body;
          if (res1.valid) {
            parent.sellers = this.response as Seller[];
          }
          for (const seller of parent.sellers) {
            this.service.getBranches(seller._id).then((res2) => {
              this.response = res2.body;
              if (res2.valid) {
                seller.branches = this.response as Branch[];
              }
            });
          }
        });
        console.log("after getting the seller and branches in the mains",this.mainCats);
        for (const sub of parent.sub_cat) {
          this.service.getSellerCats(sub._id).then((res1) => {
            this.response = res1.body;
            if (res1.valid) {
              sub.sellers = this.response as Seller[];
            }
            for (const seller of sub.sellers) {
              this.service.getBranches(seller._id).then((res2) => {
                this.response = res2.body;
                if (res2.valid) {
                  seller.branches = this.response as Branch[];
                }
              });
            }
          });
        }}
      console.log("after getting the seller and branches in the subs ",this.mainCats);

}); }}
