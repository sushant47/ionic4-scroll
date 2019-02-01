import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/people-service/people.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public people: any = [];
  private start = 1;
  private size = 10;
  constructor(private peopleService: PeopleService, private loadingController: LoadingController) { }
  ngOnInit() {
    this.loadPeople();
  }
  async loadPeople(infiniteScroll?) {
    let loading;
    if (!infiniteScroll) {
      loading = await this.loadingController.create({
        message: 'Loading'
      });
      await loading.present();
    }
    this.peopleService.getUsersPageWise(this.start, this.size)
      .subscribe((data: any) => {
        for (const person of data.message) {
          this.people.push(person);
        }
        if (infiniteScroll) {
          infiniteScroll.target.complete();
        } else {
          loading.dismiss();
        }

      });
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Hellooo'
    });
    await loading.present();
  }
  doInfinite(infiniteScroll: any) {
    this.start += 1;
    this.size += 10;
    this.loadPeople(infiniteScroll);

  }
}
