import { Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "../../custom-validator";
import {Router} from "@angular/router";
import {AuthServiceService} from "../../services/auth-service.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent {

  registerForm = new FormGroup({
      email: new FormControl(null,[Validators.required, Validators.email]),
      username: new FormControl(null, [Validators.required]),
      firstname: new FormControl(null, [Validators.required]),
      lastname: new FormControl (null, [Validators.required]),
      password: new FormControl (null, [Validators.required]),
      passwordConfirm: new FormControl (null, [Validators.required])
    },
    {validators: CustomValidators.passwordsMatching}
  )

  constructor(
    private router: Router,
    private authService: AuthServiceService
  ) { }

  register(){
    if (!this.registerForm.valid){
      return;
    }


    this.authService.register({
      email: this.registerForm.value.email,
      firstname: this.registerForm.value.firstname,
      lastname: this.registerForm.value.lastname,
      password: this.registerForm.value.password,
      username: this.registerForm.value.username
    }).pipe(
      // If registration was successfully, then navigate to log in route
      tap(()=> this.router.navigate(['../login']))
    ).subscribe();
  }
}
