import {Component} from '@angular/core';
import { CommonService } from '../services/common.service';
import {SubscriptionService} from '../services/subscription.service';
import {Router} from '@angular/router';
@Component({
    selector:'nkart-topnav',
    templateUrl:'./topnav.component.html',
    styleUrls:['./topnav.component.css']
})

export class TopnavComponent{
    title: String;
    isUserLoggedIn:boolean;
    constructor(private abc:CommonService,private subService:SubscriptionService,private router:Router){
        this.title = this.abc.getTitle();
        this.updateTopNavBar();
    }

    updateTopNavBar() {
        this.subService.captureLoginStatus()
            .subscribe(status => {
                console.log(status);
                if(status=='userLoggedIn'){
                    this.isUserLoggedIn=true;
                    this.router.navigateByUrl('profiles')
                }
                else{
                    this.isUserLoggedIn=false;
                    this.router.navigateByUrl('login');
                }
            },
                err => {
                    console.log(err);
                })
    }

    logOut(){
        //clean the the token
        localStorage.removeItem('authToken');
        this.subService.publishLogin('loggedOut');
    }
 


    /* agree: boolean;
    header: any;
    address: any;
    cart:any;
    constructor(){
        this.title = 'Nkart';
        this.header={
            logo:"assets/logo.jpg",
            name: "flipkart"
        };

        this.address = {
            country:{
                code: "IN",
                name: "India"
            }
        };

        this.cart = {
            price:1000,
            discount:100
        };
        this.agree = true;
    } */
    
}