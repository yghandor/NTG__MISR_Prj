import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {AuthServiceService} from '../../services/auth-service.service';
import {Router} from "@angular/router";
import {tap} from "rxjs";
import {LOCALSTORAGE_TOKEN_KEY} from "../../../app.module";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  });

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {
  }

  login() {

    // debugger;
    // localStorage.setItem(LOCALSTORAGE_TOKEN_KEY,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
    // this.router.navigate(['../../protected/dashboard']);

    if (!this.loginForm.valid) {
      return;
    }
    this.authService.login(this.loginForm.value).pipe(
      tap(() => {
          this.router.navigate(['../../protected/dashboard']);
        }
      )
    ).subscribe();
  }


}
