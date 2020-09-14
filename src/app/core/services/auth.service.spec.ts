import { TestBed } from '@angular/core/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';

import { AuthService } from './auth.service';
import { LoginInputI } from '../interfaces/inputUser';
import { MUTATION_LOGIN } from '../operations/mutation';
describe('AuthService', () => {
  let service: AuthService;
  let controller: ApolloTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule
      ],
      providers: [
        AuthService
      ]
    });
    controller = TestBed.inject(ApolloTestingController)
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fine mutation login', () => {
    const input: LoginInputI = {
      email: 'juan@gmail.com',
      password: '123456'
    }
    service.mutationLogin(input).subscribe((resp: any) => {
      expect(resp.data?.login?.status).toBeTruthy();
      expect(resp.data?.login?.message).toBe('Login success');
    });

    const op = controller.expectOne(MUTATION_LOGIN);

    // Assert that one of variables is Mr Apollo.
    expect(op.operation.variables.input.email).toEqual('juan@gmail.com');
    expect(op.operation.variables.input.password).toEqual('123456');
    // Respond with mock data, causing Observable to resolve.
    op.flush({
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
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMzU5ZjQ3ZWZhYjY4MmM3OGNhZjQ3ZiIsIm5hbWUiOiJqdWFuIGRpZWdvIGZhbGNvbiBjb3Jkb3ZhIiwidXNlcm5hbWUiOiJqdWFuIiwiZW1haWwiOiJqdWFuQGdtYWlsLmNvbSIsImlhdCI6MTYwMDA1MzcwNSwiZXhwIjoxNjAwMDU3MzA1fQ.YzuCkrJ148LAV84DWgkNzVQjFHrkbC27NKWID-s13kk"
        }
      }
    });
    // Finally, assert that there are no outstanding operations.
    controller.verify();

  });

});
