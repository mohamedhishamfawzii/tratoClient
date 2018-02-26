export class Branch {
  name: string;
  location: string[];
  details: string;
  seller: string;
  constructor( name: string,
               location: string[],
               details: string,
               seller: string) {
    this.name = name;
    this.location = location;
    this.details = details;
    this.seller = seller;
  }

}
