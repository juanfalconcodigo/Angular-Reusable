import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginFormComponent } from './login-form.component';
import { Router } from '@angular/router';


describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormComponent ],
      providers:[
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return null', () => {
    component.forma.controls['username'].setValue('');
    component.forma.controls['password'].setValue('');
    component.onSubmit();
    expect(component.forma.valid).toBeFalsy();
  });

  it('should redirect view admin',(() => {
    component.forma.controls['username'].setValue('d');
    component.forma.controls['password'].setValue('d');
    component.onSubmit();
    expect (routerSpy.navigate).toHaveBeenCalledWith(['admin']);
  }));
  
  
});
