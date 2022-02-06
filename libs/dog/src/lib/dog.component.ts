
import { Component, Inject } from "@angular/core";
import { ConfigDogServiceToken, Data } from '@green-tube-demo/models';
import {AppDogService} from '@green-tube-demo/share';


@Component({
    selector:'green-tube-demo-dog',
    templateUrl:'./dog.component.html',
    styleUrls:['./dog.component.scss']

})
export class DogComponent  {
    
   


    constructor( @Inject(ConfigDogServiceToken) public  data:Data, private AppRomaniaDogService:AppDogService ){
        console.log("===>x", this.AppRomaniaDogService.config)
    }
  
 
    
}