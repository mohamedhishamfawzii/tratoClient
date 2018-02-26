import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BranchService {
  constructor (private http: HttpClient) { }

  addBranch(data, seller_id): Promise<any> {
    const url = `/seller/${seller_id}/branch`;
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
