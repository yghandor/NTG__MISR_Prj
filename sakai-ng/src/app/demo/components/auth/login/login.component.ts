import {Component} from '@angular/core';
import {LayoutService} from 'src/app/layout/service/app.layout.service';
import {LoginService} from "../../../../NTG/common/services/login.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .p-password input {
            width: 100%;
            padding: 1rem;
        }

        :host ::ng-deep .pi-eye {
            transform: scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }

        :host ::ng-deep .pi-eye-slash {
            transform: scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];

    password!: string;
    LoginUserName: string = '';

    constructor(public layoutService: LayoutService, private _login: LoginService, private _router: Router,
                private _http: HttpClient
    ) {
    }

    IsLogin = false;
    ShowError = false;
    ErrorMessage = '';

    HandleLogin() {
        this.IsLogin = true;
        let url = '/rest/auth/login';
        let body = {
            "user_name": this.LoginUserName, "password": this.password
        };

        this._http.post(url, body).subscribe((resp: any) => {


                if (resp.full_name) {
                    this._login.LogCheck(resp.full_name);
                    this._router.navigate(['']);
                } else {

                    //Show Error
                    this.ErrorMessage = resp.errorMessage;
                    this.ShowError = true;

                }
                console.log(resp);


                this.IsLogin = false;

            }, error => {
                console.log(error);

                this.ErrorMessage = error.message || error;
                this.ShowError = true;

                this.IsLogin = false;
            }
        );


    }
}
