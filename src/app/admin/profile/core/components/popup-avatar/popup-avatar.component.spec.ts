import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAvatarComponent } from './popup-avatar.component';

describe('PopupAvatarComponent', () => {
  let component: PopupAvatarComponent;
  let fixture: ComponentFixture<PopupAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
