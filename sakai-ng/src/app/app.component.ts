import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {LoginService} from "./NTG/common/services/login.service";
import {NavigationStart, Router} from "@angular/router";
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    menuMode = 'static';

    constructor(private primengConfig: PrimeNGConfig,private _loginService : LoginService,private _router : Router) {

        this._router.events.subscribe(e => {

            if(e instanceof NavigationStart){

                let url = e.url.toString();

                if(this._loginService.CheckUserAuth()){

                    if(url.includes('auth')){

                        this._router.navigate(['']);


                    }


                }else{

                    if(url.includes('auth') ==false){

                        this._router.navigate(['auth']);


                    }


                }



            }


        });


    }

    ngOnInit() {
        this.primengConfig.ripple = true;
        document.documentElement.style.fontSize = '14px';
    }
}
