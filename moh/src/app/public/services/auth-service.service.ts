import {Injectable} from '@angular/core';
import {LoginRequest, LoginResponse, RegisterRequest, RegisterResponse} from "../interfaces";
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Observable, tap, of} from "rxjs";
import {JwtHelperService} from '@auth0/angular-jwt';
import {LOCALSTORAGE_TOKEN_KEY} from "../../app.module";


export const fakeLoginResponse: LoginResponse = {
  name: 'MyOnlyOne',
  email: 'rest@gmail.com',
  token: 'eyJhbGciOiJcCI6IkpXVCJ9.eyJzdW0NToxNTE2MjM5MDIyfQ.SfPOk6yJV_adQssw5c',
  tokenType: 'JWT'
}

export const fakeRegisterResponse: RegisterResponse = {
  status: 200,
  message: "Registration Successfully."
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar
  ) {
  }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return of(fakeLoginResponse).pipe(
      tap((res: LoginResponse) => {
        localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, res.token);
      }),
      tap(() => this.snackbar.open('Login Successfully', 'Close', {
        duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
      }))
    );

  }

  register(registerRequest: RegisterRequest): Observable<RegisterResponse> {
    // TODO
    return of();
    // return of(fakeRegisterResponse).pipe(
    //   tap((res: RegisterResponse) => this.snackbar.open(`User created successfully`, 'Close', {
    //     duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
    //   })),
    // );

  }

  // getLoggedInUser() {
  //   const decodedToken = this.jwtService.decodeToken();
  //   return decodedToken.user;
  // }
}
