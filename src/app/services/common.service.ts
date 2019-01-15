import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
    private title:String;
    constructor() {
        this.title='Nkart-App';
    }

    getTitle(){
        return this.title;
    }
}
