import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
 countrylist= [];
  user:any;
  tiltle:any;
  registerSuccess:boolean;
  registerFailure:boolean

  //constructor()
 constructor(private dataserv:DataService,private commonSvc:CommonService) 
 { 

    this.user= {
      firstName:'',
      lastName:'',
      dateOfBirth:'',
      userName:'',
      Email:'',
      password:'',
      gender:'',
      agree:false,
      country:'',
      phoneNumber:''
    };
 
    this.countrylist = this.dataserv.getCountries();
    this.tiltle = commonSvc.getTitle();
  }

  resetMessages(){
    this.registerSuccess=false;
    this.registerFailure=false;
  }

  registerUser(){
    this.resetMessages();
    console.info("USER DETAILS:",this.user);
    this.dataserv.registerUser(this.user)
    .subscribe(result =>{
      console.log(result);
      this.registerSuccess=true;
    },
    err =>{
      console.log(err);
      this.registerFailure=true;
    })
  }
  
}
