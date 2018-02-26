import { Injectable } from '@angular/core';
import {promise} from 'selenium-webdriver';
import {Http, RequestOptions} from '@angular/http';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MainService {

  constructor(private http: Http , private httpPoster: HttpClient) { }
  getMainCats(): Promise <string> {
    const url = `/category`;
    const options = new RequestOptions();
    return this.http.get(url, options
    ).toPromise().then(response => {
      return response['body'] as string;
    });
  }
  getSubCats(main_id: string): Promise <string> {
    const url = `/category` + main_id + '/child';
    const options = new RequestOptions();
    return this.http.get(url, options
    ).toPromise().then(response => {
      return response['body'] as string;
    });
  }
  getSellerCats(main_id: string): Promise <string> {
    const url = `/category` + main_id + '/seller';
    const options = new RequestOptions();
    return this.http.get(url, options
    ).toPromise().then(response => {
      return response['body'] as string;
    });
  }

  getBranches(main_id: string): Promise <string> {
    const url = `/seller` + main_id + '/branch';
    const options = new RequestOptions();
    return this.http.get(url, options
    ).toPromise().then(response => {
      return response['body'] as string;
    });
  }


}
