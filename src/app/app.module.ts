import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import {DijkstraModule} from './dijkstra/dijkstra.module';
import {KruskalModule} from './kruskal/kruskal.module';
import {KruskalComponent} from './kruskal/kruskal.component';
import {DijkstraComponent} from './dijkstra/dijkstra.component';

const routes: Routes = [
  {path: 'kruskal', component: KruskalComponent},
  {path: 'dijkstra', component: DijkstraComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    DijkstraModule,
    KruskalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
