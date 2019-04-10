import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('http://localhost:3000/getData');
  }

  getMaleCount() {
    return this.http.get('http://localhost:3000/getMaleCount');
  }

  getFemaleCount() {
    return this.http.get('http://localhost:3000/getFemaleCount');
  }
}
