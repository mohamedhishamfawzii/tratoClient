import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class FileUploadService {
  constructor (private http: HttpClient) { }

  uploadFile(model, files, id): Promise<any> {
    const url = `/upload_img/${model}`;
    const user_id = localStorage.getItem('user_id');
    const formData = new FormData();
      for ( const file of files) {
           formData.append('file', file, file.name);
      }
    formData.append('user_id', user_id);
    formData.append('id', id);
    return this.http.post(url, formData).toPromise().then(res => {
      return res;
    });
  }
}
