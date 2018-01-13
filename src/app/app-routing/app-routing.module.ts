import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroListComponent} from '../component/hero-list/hero-list.component';
import {CrisisListComponent} from '../component/crisis-list/crisis-list.component';
import {NotFoundComponent} from '../component/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HeroListComponent},
  {path: 'hero-list', component: HeroListComponent},
  {path: 'crisis-list', component: CrisisListComponent},
  {path: '**', component: NotFoundComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule { }
