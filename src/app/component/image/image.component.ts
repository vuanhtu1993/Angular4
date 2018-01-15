import {Component, OnInit} from '@angular/core';
import {LoadImageService} from '../../load-image.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent'

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  constructor(private loadImage: LoadImageService) {
    const clickButton = Observable.fromEvent(document, 'click');
  }

  urlImage;
  index = -1;

  ngOnInit() {
    this.loadImage.emit.subscribe((index) => {
      this.loadImage.loadImage(index).subscribe((image) => {
        console.log(image);
        this.urlImage = image.url;
      });
    });
  }

  onClickLoadNext() {
    if (-1 <= this.index && this.index <= 2) {
      this.index++;
      this.loadImage.emit.emit(this.index);
      console.log(this.index);
    }
  }

  onClickLoadPrev() {
    if (1 <= this.index && this.index <= 3) {
      this.index --;
      this.loadImage.emit.emit(this.index);
      console.log(this.index);
    }
  }
}
