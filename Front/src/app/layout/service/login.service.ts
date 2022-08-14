import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private IsLogin: boolean = false;
    fullName: any = '';

    constructor() {
        debugger;
        if (localStorage.getItem('IsUserLogin') == 'true') {

            this.IsLogin = true;
            this.fullName = localStorage.getItem('fullName');
        }

    }

    isLogin(): boolean {
        return this.IsLogin;
    }

    logMe(fullName: string) {
        this.fullName = fullName;
        this.IsLogin = true;
        localStorage.setItem('IsUserLogin', 'true');
        localStorage.setItem('fullName', fullName);


    }

    logOut() {
        this.fullName = '';
        this.IsLogin = false;
        localStorage.setItem('IsUserLogin', 'false');
        localStorage.setItem('fullName', '');
    }
}
