import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoryService {
  constructor (private http: HttpClient) { }

  addCat1(data): Promise<any> {
    const url = `/category/`;
    const user_id = localStorage.getItem('user_id');
    const body = {
      'user_id': user_id,
      'category_data': data
    };
    return this.http.post(url, body).toPromise().then(response => {
        return response;
    });
  }

  addCat2(data, parent_id): Promise<any> {
    const url = `/category/${parent_id}/child`;
    const user_id = localStorage.getItem('user_id');
    const body = {
      'user_id': user_id,
      'category_data': data
    };
    return this.http.post(url, body).toPromise().then(response => {
        return response;
    });
  }
}
