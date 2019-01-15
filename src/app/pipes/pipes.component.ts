import {Component} from '@angular/core';
 
@Component(

    {
        selector:'app-pipes',
        templateUrl:'./pipes.component.html',
        styleUrls: ['./pipes.component.css']
    }
)

export class PipesComponent{

    arr = [3,7,9,5,6,4];

    name='Abhishek';

    day = new Date(3-12-2018);

    cur = 235.5;

    jsonVal:object={id:1,name:"Abhi"};
}