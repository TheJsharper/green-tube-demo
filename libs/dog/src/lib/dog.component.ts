//import { AppService } from './../../../../apps/romania/src/app/app.service';
import { DogSerrvice } from './services/dog.service';
import { Component, Inject, Input, OnInit } from "@angular/core";
import { Data } from "..";

import { DogServiceToken } from './dog.module';

@Component({
    selector:'green-tube-demo-dog',
    templateUrl:'./dog.component.html',
    styleUrls:['./dog.component.scss']

})
export class DogComponent /*implements OnIniti*/ {
    @Input() name?:string ;
   
  /*constructor(private AppService: AppService){
    
    }*/

   // constructor(@Inject(DogServiceToken) private  servicve:Data){}
  
 /*   ngOnInit(): void {
       console.log("====>x", this.servicve);
        
    }*/
    
}