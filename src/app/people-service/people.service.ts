import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class PeopleService {

  perpage = 50;

  constructor(public http: Http) { }
  getUsersPageWise(pageNo: number, size: number) {
    return this.http.get(`https://pagination-node.herokuapp.com/userPages?pageNo=${pageNo}&size=${size}`).pipe(map(response => {
      return response.json() || { success: false, message: 'No response from server' };
    }));
  }
  getAllUsers() {
    return this.http.get('https://pagination-node.herokuapp.com/users').pipe(map(response => {
      return response.json() || { success: false, message: 'No response from server' };
    }));
  }
}
