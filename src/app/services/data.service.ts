import {Injectable} from  '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {
    
  private  countryList = [];
  private stateList: Array<any>;
    constructor(private http: HttpClient){

        
        }

        registerUser(payLoad){
            let url = 'http://localhost:4000/nkart/api/register';
            return this.http.post(url,payLoad);
        }

        loginUser(payLoad) {
            let url = 'http://localhost:4000/nkart/api/login';
            return this.http.post(url,payLoad);
        }
    
        getData(url){
            return this.http.get(url);
        }

        
    getCountries(){

        let countries = [
            { name:'INDIA', code:'IN'},
            {name: 'America',code:'USA'},
            {name: 'Russia',code:'SSR'}
           ];

           this.countryList  = countries.map(x=>{
            return {text:x.name,value:x.code};
        })


        return this.countryList;
    }
 
    getStateList(){
        let states = [
            {name:'Uttar Prades', code:'UP'},
            {name:'Telengana',code:'TS'}];

            this.stateList = states.map(x=>{
                return {text:x.name , value:x.code};
            })
            return this.stateList;
    }
}

