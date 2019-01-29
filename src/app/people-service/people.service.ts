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

  // load(start: number = 0) {

  //   return new Promise(resolve => {

  //     this.http.get('http://192.168.4.13:3000/api/people?filter[limit]=' + this.perpage + '&filter[skip]=' + start)
  //       .map(res => res.json())
  //       .subscribe(data => {

  //         resolve(data);

  //       });
  //   });
  // }
  // load(start: number = 0): Promise<any> {
  //   return this.http.get('https://api.exchangeratesapi.io/latest').map(response => {
  //     return response.json() || { success: false, message: 'No response from server' };
  //   });
  // }
  getPageResults(pageNo: number, size: number) {
    return this.http.get(`https://pagination-node.herokuapp.com/userPages?pageNo=${pageNo}&size=${size}`).pipe(map(response => {
      return response.json() || { success: false, message: 'No response from server' };
    }));
  }
  get() {
    return this.http.get('https://pagination-node.herokuapp.com/users');
  }
}
