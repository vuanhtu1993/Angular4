import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {CrisisListComponent} from './crisis-list.component';
import {CrisisService} from './crisis.service';
import {AppRoutingModule} from '../../app-routing/app-routing.module';

@NgModule({
  declarations: [
    CrisisListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
})
export class CrisisModule {}
