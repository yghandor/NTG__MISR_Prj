import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'User Managements',
                items: [
                    { label: 'Employee List', icon: 'pi pi-fw pi-id-card', routerLink: ['/employee/list'] },
                    { label: 'Flowchart Designer', icon: 'pi pi-sitemap', routerLink: ['/designer'] }



                ]
            }
        ];
    }
}
