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
for (const parent of this.mainCats) {
  this.viewSubCats(parent.id);
  parent.sub_cat = this.subCats;
  this.viewSellerCats(parent.id);
  parent.sellers = this.sellers;
  for (const seller of parent.sellers) {
    this.viewBranches(seller.id);
    seller.branches = this.branches;
  }
  for (const child of parent.sub_cat) {
    this.viewSellerCats(child.id);
    child.sellers = this.sellers;
    for (const seller of child.sellers) {
      seller.branches = this.branches;
    }
  }
}

  }
  viewMainCats() {
  this.service.getMainCats().then((res) => {
  this.response = res.body;
  if (res.valid) {
    this.mainCats = this.response as Category[] ; }}
  );
}
  viewSubCats(main: string ) {
    this.service.getSubCats(main).then((res) => {
      this.response = res.body;
      if (res.valid) {
        this.subCats = this.response as Category[] ; }}
    );
  }
  viewSellerCats(main: string ) {
    this.service.getSellerCats(main).then((res) => {
      this.response = res.body;
      if (res.valid) {
        this.sellers = this.response as Seller[] ; }}
    );
  }
  viewBranches(main: string ) {
    this.service.getBranches(main).then((res) => {
      this.response = res.body;
      if (res.valid) {
        this.branches = this.response as Branch[] ; }}
    );
  }

}
