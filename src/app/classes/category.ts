import {Seller} from './seller';

export class Category {
  _id: string ;
  name: string;
  img_path: string;
  parent_category: string;
  main_type: string;
  sub_cat: Category [];
  sellers: Seller [];
  constructor( name: string,
  img_path: string,
  parent_category: string,
  main_type: string, id: string ) {
    this.name = name;
    this._id = id
    this.img_path = img_path;
    this.parent_category = parent_category;
    this.main_type = main_type;
  }

}
