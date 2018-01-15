import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

declare const $;

@Injectable()
export class LoadImageService {
  arrayImage: Image[] = [
    {id: 1, url: 'https://i.ytimg.com/vi/_FvTVWjLiHM/hqdefault.jpg'},
    {id: 2, url: 'https://i.ytimg.com/vi/P4g0Ryl-WZc/hqdefault.jpg'},
    {id: 3, url: 'https://i.ytimg.com/vi/czhDhxFfZsM/maxresdefault.jpg'},
    {id: 4, url: 'http://freewallpapersworld.com/ui/images/6/WDF_2029623.gif'}
  ];
  index = 0;
  constructor() {
  }
  // emit = new EventEmitter();
  loadImage(index): Observable<Image> {
    return Observable.of(this.arrayImage[index]);
  }
}

export class Image {
  id: number;
  url: string;
  constructor() {}
}
