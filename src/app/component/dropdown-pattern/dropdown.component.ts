import {Component} from '@angular/core';


@Component({
  selector: 'app-dropdown',
  template: `
    <div style="position: relative; display: inline-block;" appClickOutside (clickOutside)="onClickOutside($event)">
      <button (click)="active =!active">Toggle dropdown</button>
      <div *ngIf="active"
           style="width: 200px; padding: 10px; top: 100%; left: 0; position:absolute; background: yellow;">
        This is drop down menu
      </div>
    </div>
  `,

})
export class DropdownComponent {
  private active: boolean = false;

  onClickOutside(event: Object) {
    console.log(event);
    if (event && event['value'] === true) {
      this.active = false;
    }
  }
}
