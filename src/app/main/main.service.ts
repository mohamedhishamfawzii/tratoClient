import { Injectable } from '@angular/core';
import {promise} from 'selenium-webdriver';
import {Http, RequestOptions} from '@angular/http';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MainService {

  constructor(private http: HttpClient , private httpPoster: HttpClient) { }
  getMainCats(): Promise <string> {
    const url = `/category`;

    return this.http.get(url
    ).toPromise().then(response => {
      return response['body'] as string;
    });
  }
  getSubCats(main_id: string): Promise <string> {
    const url = `/category` + main_id + '/child';

    return this.http.get(url
    ).toPromise().then(response => {
      return response['body'] as string;
    });
  }
  getSellerCats(main_id: string): Promise <string> {
    const url = `/category` + main_id + '/seller';

    return this.http.get(url
    ).toPromise().then(response => {
      return response['body'] as string;
    });
  }

  getBranches(main_id: string): Promise <string> {
    const url = `/seller` + main_id + '/branch';

    return this.http.get(url
    ).toPromise().then(response => {
      return response['body'] as string;
    });
  }


}
