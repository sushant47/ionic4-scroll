import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/people-service/people.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public people: any = [];
  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  private getAllUsers() {
    this.peopleService.getAllUsers().subscribe((data: any) => {
      console.log(data);
      this.people = data;
    });
  }
}
