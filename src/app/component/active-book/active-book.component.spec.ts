import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveBookComponent } from './active-book.component';

describe('ActiveBookComponent', () => {
  let component: ActiveBookComponent;
  let fixture: ComponentFixture<ActiveBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
