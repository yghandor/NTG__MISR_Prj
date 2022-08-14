import {Injectable} from '@angular/core';
import {Product} from "../../demo/api/product";

@Injectable({
    providedIn: 'root'
})
export class ShopCardService {
    products: Product[] = [];

    AddToCards(p: Product) {

        this.products.push(p);
        localStorage.setItem('SoldProucts', JSON.stringify(this.products));

    }

    constructor() {

        let old = localStorage.getItem('SoldProucts');
        if (old && old != '') {
            this.products = JSON.parse(old);
        }


    }
}
