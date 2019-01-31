import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/people-service/people.service';
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {
  data: any = [];
  constructor(private peopleService: PeopleService, private router: Router, private events: Events) { }

  ngOnInit() {
    this.subscribeToNewsFeedEvent();
    // this.peopleService.getNewsFeed('top-headlines?country=us&category=business')
    //   .subscribe(data => {
    //     this.data = data;
    //   });
  }
  onGoToNewsSinglePage(article) {
    this.peopleService.currentArticle = article;
    this.router.navigate(['/tabs/news-single']);
  }
  subscribeToNewsFeedEvent() {
    this.events.subscribe('data:created', (data) => {
      this.data = data;
    });
  }

}
