import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/people-service/people.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public people: any = [];
  private start = 1;
  private size = 10;
  constructor(private peopleService: PeopleService) { }
  ngOnInit() {
    this.loadPeople();
  }
  loadPeople(infiniteScroll?) {

    return this.peopleService.getUsersPageWise(this.start, this.size)
      .subscribe((data: any) => {
        for (const person of data.message) {
          this.people.push(person);
        }
        if (infiniteScroll) {
          infiniteScroll.target.complete();
        }

      });
  }

  doInfinite(infiniteScroll: any) {
    this.start += 1;
    this.size += 10;
    this.loadPeople(infiniteScroll);

  }
}
