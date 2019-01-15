import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import {Router} from '@angular/router'
import {SubscriptionService} from '../services/subscription.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: any
  constructor(private dataSvc: DataService , private router:Router,private subService:SubscriptionService) {
    this.user = {
      userName: '',
      password: ''
    };
  }
  loginUser() {
    console.log(this.user);
    this.dataSvc.loginUser(this.user).subscribe((result:any) => {
      console.log(result);
      //if(result.)
      if(result.token){
        localStorage.setItem('authToken',result.token);
        this.subService.publishLogin('userLoggedIn');
      }
    },
      err => {
        console.log(err);
      })
  }


}
