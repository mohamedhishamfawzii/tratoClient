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
  mainCats: Category[];
  subCats: Category[];
  sellers: Seller [];
  branches: Branch[];
  constructor(private service: MainService) {
  }

  ngOnInit() {
    this.viewMainCats();
  }

  viewMainCats() {
    this.service.getMainCats().then((res) => {
    this.response = res.body;
    if (res.valid) {
      this.mainCats = this.response as Category[] ;
    }
    for (const parent of this.mainCats) {
      this.viewSubCats(parent._id);
    }
  });
}
  viewSubCats(main: string ) {
    this.service.getSubCats(main).then((res) => {
      this.response = res.body;
      if (res.valid) {
        this.subCats = this.response as Category[] ; }
        for (const parent of this.mainCats) {
          parent.sub_cat = this.subCats;
        //  this.viewSellerCats(parent._id);

        }
        console.log("qsdwqdqqwewe", this.mainCats);
      }
    );
  }
  // viewSellerCats(main: string ) {
  //   this.service.getSellerCats(main).then((res) => {
  //     this.response = res.body;
  //     if (res.valid) {
  //       this.sellers = this.response as Seller[] ; }
  //       for (const parent of this.mainCats) {
  //         parent.sellers = this.sellers;
  //         for (const seller of parent.sellers) {
  //           this.viewBranches(seller._id);
  //           // seller.branches = this.branches;
  //         }
  //         for (const child of parent.sub_cat) {
  //           this.viewSellerCats(child._id);
  //           child.sellers = this.sellers;
  //           for (const seller of child.sellers) {
  //             seller.branches = this.branches;
  //           }
  //         }
  //     }}
  //   );
  // }
  // viewBranches(main: string ) {
  //   this.service.getBranches(main).then((res) => {
  //     this.response = res.body;
  //     if (res.valid) {
  //       this.branches = this.response as Branch[] ; }
  //       for (const parent of this.mainCats) {
  //       for (const seller of parent.sellers) {
  //         seller.branches = this.branches;
  //       }
  //       // for (const child of parent.sub_cat) {
  //       //   this.viewSellerCats(child.id);
  //       //   child.sellers = this.sellers;
  //       //   for (const seller of child.sellers) {
  //       //     seller.branches = this.branches;
  //       //   }
  //       // }
  //     }
  //     }
  //   );
  // }

}
