
import { Component, Inject } from "@angular/core";
import { ConfigDogServiceToken, Data } from '@green-tube-demo/models';


@Component({
    selector:'green-tube-demo-dog',
    templateUrl:'./dog.component.html',
    styleUrls:['./dog.component.scss']

})
export class DogComponent  {
    
   


    constructor( @Inject(ConfigDogServiceToken) public  data:Data){}
  
 
    
}