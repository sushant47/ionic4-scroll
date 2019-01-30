import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people-service/people.service';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html'
})
export class TabsComponent implements OnInit {

    public people: any = [];
    private start = 1;
    private size = 10;

    constructor(private peopleService: PeopleService) {
    }
    ngOnInit() {
    }
}
