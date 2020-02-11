import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/main/add/add.component';
import { EditComponent } from './components/main/edit/edit.component';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'main', component: MainComponent },
    { path: 'add', component: AddComponent },
    { path: 'edit', component: EditComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
