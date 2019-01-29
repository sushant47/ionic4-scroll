import { Component } from '@angular/core';
import { PeopleService } from '../people-service/people.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public people: any = [];
  private start = 1;
  private size = 10;

  constructor(private peopleService: PeopleService) {
    this.loadPeople();
  }
  loadPeople(infiniteScroll?) {

    return this.peopleService.getPageResults(this.start, this.size)
      .subscribe((data: any) => {
        console.log(data);
        for (const person of data.message) {
          this.people.push(person);
        }
        if (infiniteScroll) {
          infiniteScroll.target.complete();
        }

      });
  }

  doInfinite(infiniteScroll: any) {
    console.log('doInfinite, start is currently ' + this.start);
    this.start += 1;
    this.size += 10;
    this.loadPeople(infiniteScroll);
    // infiniteScroll.complete();

  }
}
