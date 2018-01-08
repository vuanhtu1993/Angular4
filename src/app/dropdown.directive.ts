import {Directive, ElementRef, HostListener, Renderer, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  private isOpen = false;

  @HostListener('click')
  onClick() {
    const part = this.element.nativeElement;
    if (this.isOpen) {
      this.renderer.addClass(part, 'show');
    } else {
      this.renderer.removeClass(part, 'show');
    }
    this.isOpen = !this.isOpen;
  }

  constructor(private element: ElementRef,
              private renderer: Renderer2) {
  }

}
