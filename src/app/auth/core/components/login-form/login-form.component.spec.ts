import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginFormComponent } from './login-form.component';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { of, throwError } from 'rxjs';


describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      imports: [
        ApolloTestingModule
      ],
      providers: [
        AuthService,
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
    component.forma.controls['email'].setValue('');
    component.forma.controls['password'].setValue('');
    component.onSubmit();
    expect(component.forma.valid).toBeFalsy();
  });

  it('should redirect view admin', (() => {
    const dummyResult = {
      "data": {
        "login": {
          "status": true,
          "message": "Login success",
          "user": {
            "id": "5f359f47efab682c78caf47f",
            "name": "juan diego falcon cordova",
            "username": "juan",
            "email": "juan@gmail.com",
            "avatar": "https://instaclone-falcon.s3.amazonaws.com/avatar/5f359f47efab682c78caf47f.jpeg",
            "siteWeb": "https://juanfalcon.vercel.app/",
            "description": "Me considero una persona analítica,creativa,perseverante, investigadora y apasionada por el mundo de las tecnologías Web y IA.",
            "password": "$2b$10$tG/TQZSchUJzBPikMRfZYePgYqIs9vw3jbof6kWh3szooNrdOW6uC",
            "createdAt": 1597349703000
          },
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMzU5ZjQ3ZWZhYjY4MmM3OGNhZjQ3ZiIsIm5hbWUiOiJqdWFuIGRpZWdvIGZhbGNvbiBjb3Jkb3ZhIiwidXNlcm5hbWUiOiJqdWFuIiwiZW1haWwiOiJqdWFuQGdtYWlsLmNvbSIsImlhdCI6MTYwMDAzNjU2NiwiZXhwIjoxNjAwMDQwMTY2fQ.HsYB-_854XDziXvwPwTFw83ND3v9ZL8VSgQlmGgFvGI"
        }
      }
    }
    component.forma.controls['email'].setValue('d');
    component.forma.controls['password'].setValue('d');
    spyOn(component._authService, "mutationLogin").and.returnValue(of(dummyResult));
    component.onSubmit();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['admin']);
  }));

  it('sould return error is true', () => {
    component.forma.controls['email'].setValue('d');
    component.forma.controls['password'].setValue('f');
    spyOn(component._authService, 'mutationLogin').and.returnValue(throwError({ error: 'fatal' }));
    component.onSubmit();
    expect(component.error).toBeTruthy();
  });



});
