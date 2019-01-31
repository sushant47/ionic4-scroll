import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class PeopleService {
  currentArticle: any;
  constructor(public http: HttpClient) { }
  getUsersPageWise(pageNo: number, size: number) {
    return this.http.get(`https://pagination-node.herokuapp.com/userPages?pageNo=${pageNo}&size=${size}`);
  }
  getAllUsers() {
    return this.http.get('https://pagination-node.herokuapp.com/users');
  }
  getNewsFeed(url) {
    return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`);
  }
}
