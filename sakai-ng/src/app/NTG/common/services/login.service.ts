import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private IsLogin: boolean = false;
    fullName: any = '';

    constructor() {
        if (localStorage.getItem('IsLogin') == 'true') {
            this.IsLogin = true;
            this.fullName = localStorage.getItem('fullName');
        }
    }

    CheckUserAuth(): boolean {
        return this.IsLogin;
    }

    LogCheck(LoginUserName: string) {
        this.IsLogin = true;
        this.fullName = LoginUserName;
        localStorage.setItem('IsLogin', 'true');
        localStorage.setItem('fullName', LoginUserName);
    }

    logOut() {
        this.IsLogin = false;
        localStorage.setItem('IsLogin', 'false');
    }
}
