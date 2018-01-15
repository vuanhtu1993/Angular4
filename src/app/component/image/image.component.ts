import { Component, OnInit } from '@angular/core';
import {LoadImageService} from '../../load-image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  constructor(private loadImage: LoadImageService) {
  }
  urlImage;
  index = 0 ;
  ngOnInit() {
  }
  onClickLoadNext() {
    if (0 <= this.index && this.index <= 2) {
      this.index ++;
      const now =  this.loadImage.loadImage(this.index).subscribe((param) => {
        console.log(param);
        this.urlImage = param.url;
      });
    }
  }
  onClickLoadPrev() {
    if (1 <= this.index && this.index <= 3) {
      this.index --;
      this.loadImage.loadImage(this.index).subscribe((param) => {
        console.log(param);
        this.urlImage = param.url;
      });
    }
  }
}
