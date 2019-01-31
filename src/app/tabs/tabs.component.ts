import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people-service/people.service';
import { Events } from '@ionic/angular';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html'
})
export class TabsComponent implements OnInit {

    constructor(private peopleService: PeopleService, private events: Events) {
    }
    ngOnInit() {
    }
    public getNewsFeed() {
        this.peopleService.getNewsFeed('top-headlines?country=us&category=business')
            .subscribe(data => {
                console.log(data);
                this.pushNewsFeed(data);
            });
    }
    public pushNewsFeed(data: any) {
        this.events.publish('data:created', data);
    }
}
