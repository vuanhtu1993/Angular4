import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {CrisisListComponent} from './crisis-list.component';
import {CrisisService} from './crisis.service';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    CrisisListComponent,
    CrisisDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CrisisService],
})
export class CrisisModule {}
