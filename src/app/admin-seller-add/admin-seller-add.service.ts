import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SellerService {
  constructor (private http: Http) { }

  addSeller(data): Promise<any> {
    const url = `/category/seller`;
    const user_id = localStorage.getItem('user_id');
    const body = {
      'user_id': user_id,
      'seller_data': data
    };
    return this.http.post(url, body).toPromise().then(response => {
        return response;
    });
  }
}
