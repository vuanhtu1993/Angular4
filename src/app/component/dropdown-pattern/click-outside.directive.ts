import {Directive, OnInit, OnDestroy, Output, EventEmitter, ElementRef} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';

@Directive({
  selector: '[appClickOutside]'
})

export class ClickOutsideDirective implements OnInit, OnDestroy {
  private listening: boolean;
  private globalClick: Observable<MouseEvent>;

  @Output('clickOutside') clickOutside = new EventEmitter();

  constructor(private element: ElementRef) {
    this.listening = false;
    this.clickOutside = new EventEmitter();
    console.log(this.element.nativeElement);
  }

  ngOnInit() {
    this.globalClick = Observable
      .fromEvent(document, 'click')
      .delay(1)
      .do(() => {
        this.listening = true;
      }).subscribe((event: MouseEvent) => {
        this.onGlobalClick(event);
      });
  }

  ngOnDestroy() {
    this.globalClick.unsubscribe();
  }

  onGlobalClick(event: MouseEvent) {
    if (event instanceof MouseEvent && this.listening === true) {
      if (this.isDescendant(this.element.nativeElement, event.target) === true) {
        this.clickOutside.emit({
          target: (event.target || null),
          value: false
        });
      } else {
        this.clickOutside.emit({
          target: (event.target || null),
          value: true
        });
      }
    }
  }

  isDescendant(parent, child) {
    let node = child;
    while (node !== null) {
      if (node === parent) {
        return true;
      } else {
        node = node.parentNode;
      }
    }
    return false;
  }
}
