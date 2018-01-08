import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appClearDropdown]'
})
export class ClearDropdownDirective {

  @HostListener('click')
  onClick() {
    const test = this.element.nativeElement.querySelector('#dropdown-menu');
    this.renderer.removeClass(test, 'show');
  }

  constructor(private element: ElementRef,
              private renderer: Renderer2) {
  }

}
