import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';
import { UserComponent } from './user/user.component';
import { DetailComponent } from './detail/detail.component';

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
    declarations: [TabsComponent, UserComponent, DetailComponent]
})
export class TabsModule { }
