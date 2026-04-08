import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OldSiteComponent } from './old/old-site/old-site.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'old', component: OldSiteComponent }
];
