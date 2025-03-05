import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HenrylingosComponent } from './henrylingos/henrylingos.component';
import { HenrymisticComponent } from './henrymistic/henrymistic.component';
import { GuilhermeHenriqueComponent } from './guilherme-henrique/guilherme-henrique.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'henrylingos',
        component: HenrylingosComponent,
    },
    {
        path: 'henrymistic',
        component: HenrymisticComponent,
    },
    {
        path: 'guilhermehenrique',
        component: GuilhermeHenriqueComponent
    }
];
