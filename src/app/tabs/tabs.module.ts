import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';
import { UserComponent } from './user/user.component';
import { DetailComponent } from './detail/detail.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsComponent,
        children: [
            {
                path: 'user',
                component: UserComponent
            },
            {
                path: 'detail',
                component: DetailComponent
            },
            {
                path: 'news-feed',
                component: NewsFeedComponent
            },
            {
                path: 'news-single',
                component: NewsComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [TabsComponent, UserComponent, DetailComponent, NewsFeedComponent, NewsComponent]
})
export class TabsModule { }
