import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  constructor (private http: Http) { }

  addUser(data): Promise<any> {
    const url = `user/`;
    const user_id = localStorage.getItem('user_id');
    const body = {
      'user_id': user_id,
      'user_data': data
    };
    return this.http.post(url, body).toPromise().then(response => {
        return response;
    });
  }
}
