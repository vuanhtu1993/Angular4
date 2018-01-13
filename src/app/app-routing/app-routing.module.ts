import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroListComponent} from '../component/hero-list/hero-list.component';
import {CrisisListComponent} from '../component/crisis-list/crisis-list.component';
import {NotFoundComponent} from '../component/not-found/not-found.component';
import {HomeComponent} from '../component/home/home.component';
import {HeroDetailComponent} from '../component/hero-list/hero-detail/hero-detail.component';
import {CrisisDetailComponent} from '../component/crisis-list/crisis-detail/crisis-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'hero-list', component: HeroListComponent, children: [
    {path: ':id', component: HeroDetailComponent}
  ]},
  {path: 'crisis-list', component: CrisisListComponent, children: [
    {path: ':id', component: CrisisDetailComponent}
  ]},
  {path: '**', component: NotFoundComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule { }
