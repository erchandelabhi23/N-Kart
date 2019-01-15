import { Injectable } from '@angular/core';

@Injectable()

export class ProductService {
    productList: Array<any>;

    constructor() {

    }

    getProducts() {
        this.productList = [{sno:'1', brand: 'Apple', model: 'Iphonex', price: 10000, quantity: 5 },
        {sno:'2', brand: 'Samsung', model: 'S8', price: 20000, quantity: 9 },
        {sno:'3', brand: 'Oppo', model: 'SA12', price: 12000, quantity: 8 },
        {sno:'4', brand: 'Oneplus', model: 'OP5', price: 22000, quantity: 6 }];

        return this.productList;
    }
}