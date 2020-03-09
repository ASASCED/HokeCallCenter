import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/main/add/add.component';
import { EditComponent } from './components/main/edit/edit.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';

const APP_ROUTES: Routes = [
  { path: 'add', component: AddComponent, canActivate: [] },
  { path: 'main', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: EditComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
