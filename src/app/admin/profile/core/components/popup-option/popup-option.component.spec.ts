import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupOptionComponent } from './popup-option.component';

describe('PopupOptionComponent', () => {
  let component: PopupOptionComponent;
  let fixture: ComponentFixture<PopupOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
