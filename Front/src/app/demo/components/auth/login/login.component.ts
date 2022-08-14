import {Component} from '@angular/core';
import {LayoutService} from 'src/app/layout/service/app.layout.service';
import {LoginService} from "../../../../layout/service/login.service";
import {ShopCardService} from "../../../../layout/service/shop-card.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Product} from "../../../api/product";

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

    password: string = '';
    userName = '';
    httpINProcess: boolean = false;

    constructor(public layoutService: LayoutService, private _login: LoginService,
                private _card: ShopCardService, private _router: Router,
                private _http: HttpClient
    ) {
    }

    HandleLogin() {
        let url = '/rest/auth/login';
        let body = {
            user_name: this.userName,

            password: this.password


        };
        //Authenticate user & password with back end
        this.httpINProcess = true;
        this._http.post(url, body).subscribe((resp: any) => {

            if(resp.full_name){

                this._login.logMe(resp.full_name);
                let temp = localStorage.getItem('tempProduct');
                localStorage.removeItem('tempProduct');
                if(temp){

                    let p : Product = JSON.parse(temp);
                    this._card.AddToCards(p);

                }

                this._router.navigate(['']);


            }else{
                alert(resp.errorMessage);
            }

            this.httpINProcess = false;

        }, error => {
            alert(error.message);
            this.httpINProcess = false;

        });


    }
}
