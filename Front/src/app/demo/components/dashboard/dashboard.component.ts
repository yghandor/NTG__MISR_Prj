import { Component, OnInit, OnDestroy } from '@angular/core';
import {MenuItem, SelectItem} from 'primeng/api';
import { Product } from '../../api/product';
import { ProductService } from '../../service/product.service';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import {LoginService} from "../../../layout/service/login.service";
import {Router} from "@angular/router";
import {ShopCardService} from "../../../layout/service/shop-card.service";

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {
    products : Product[] = [];

    sortOptions: SelectItem[] = [];

    sortOrder: number = 0;

    sortField: string = '';
    sortKey: any= '';


    constructor(private productService: ProductService, public layoutService: LayoutService
                ,public _login : LoginService,private _router : Router,
                public _product : ShopCardService
                ) {

    }

    ngOnInit() {
         this.productService.getProductsSmall().then(data => this.products = data);
        this.sortOptions = [
            {label: 'Price High to Low', value: '!price'},
            {label: 'Price Low to High', value: 'price'}
        ];


    }


    ngOnDestroy() {

    }

    onSortChange(event : any) {
        let value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        }
        else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }

    HandleAddItemToCard($event: any, product: Product) {

        if(this._login.isLogin()){
            this._product.AddToCards(product);
            alert(product.name + ' Added To Your Card');
        }else{
            localStorage.setItem('tempProduct',JSON.stringify(product));
            this._router.navigate(['auth/login']);
        }

    }
}
