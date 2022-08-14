import {AfterViewInit, Component} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import {LoginService} from "./service/login.service";
import {ShopCardService} from "./service/shop-card.service";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements AfterViewInit{

    items!: MenuItem[];

    constructor(public layoutService: LayoutService,public _login : LoginService,
                public _card : ShopCardService
                ) { }

    ngAfterViewInit(): void {
        this.layoutService.onMenuToggle();

    }
}
