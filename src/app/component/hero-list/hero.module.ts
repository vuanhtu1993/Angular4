import {NgModule} from '@angular/core';
import {HeroService} from './hero.service';
import {HeroListComponent} from './hero-list.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    HeroListComponent,
    HeroDetailComponent
  ],
  imports: [
  ],
  providers: [
    HeroService
  ],
})
export class HeroModule {
}

