import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent {
  urlToGetAllProfiles: string;
  profiles:any
  selectedProfile:any;
  constructor(private dataSvc: DataService) {
    this.urlToGetAllProfiles = "http://localhost:4000/nkart/api/getprofiles";
    this.profiles = [];
    this.getAllProfiles();
  }

  getAllProfiles() {
    this.dataSvc.getData(this.urlToGetAllProfiles)
      .subscribe(result => {
        console.log(result);
        this.profiles = result;
      },
        err => {
          console.log(err)
        });
  }

  getProfileById(userInfo) {
    this.dataSvc.getData(this.urlToGetAllProfiles+`/${userInfo.userName}`)
    .subscribe(result => {
      console.log(result);
      this.selectedProfile= result;
      
    },
      err => {
        console.log(err)
      });
  }



}
