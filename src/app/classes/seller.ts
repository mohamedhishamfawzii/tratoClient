import {Branch} from './branch';

export class Seller {
  name: string;
  contacts: string[];
  main_category: string;
  _id: string ;
  sub_category: string;
  branches: Branch [];
  constructor( name: string,
               contacts: string[],
               main_category: string,
               sub_category: string, id: string ) {
    this.name = name;
    this._id = id ;
    this.contacts = contacts;
    this.main_category = main_category;
    this.sub_category = sub_category;
  }

}
