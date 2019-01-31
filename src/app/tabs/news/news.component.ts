import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/people-service/people.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  article: any;
  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.article = this.peopleService.currentArticle;
    console.log(this.peopleService.currentArticle);
  }

}
