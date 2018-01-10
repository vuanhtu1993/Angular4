import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveBookComponent } from './inactive-book.component';

describe('InactiveBookComponent', () => {
  let component: InactiveBookComponent;
  let fixture: ComponentFixture<InactiveBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InactiveBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InactiveBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
