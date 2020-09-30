import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorFabricComponent } from './editor-fabric.component';

describe('EditorFabricComponent', () => {
  let component: EditorFabricComponent;
  let fixture: ComponentFixture<EditorFabricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorFabricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorFabricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
