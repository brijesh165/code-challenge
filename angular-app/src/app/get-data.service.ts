import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {

  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  putData(jsonData: any) {
    return this.http.post(this.url + 'postData', jsonData);
  }

  getColumnName() {
    return this.http.get(this.url + 'getColumnName');
  }

  getData(pageNumber, pageSize) {
    let header = new HttpHeaders();
    header = header.append('pageNo', pageNumber);
    header = header.append('size', pageSize);

    return this.http.get(this.url + 'getData', {headers: header});
  }

  getMaleCount() {
    return this.http.get(this.url + 'getMaleCount');
  }

  getFemaleCount() {
    return this.http.get(this.url + 'getFemaleCount');
  }
}
