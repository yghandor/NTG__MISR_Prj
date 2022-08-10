import {Component} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {LayoutService} from "./service/app.layout.service";
import {LoginService} from "../NTG/common/services/login.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];
    items2: MenuItem[] = [

        {
            label: 'Logout', command: event => {
                this._loginService.logOut();
                this._router.navigate(['auth']);


            }
        }

    ];


    constructor(public layoutService: LayoutService,public _loginService : LoginService,private _router : Router) {


    }
}
