import { Component, Inject } from "@angular/core";
import { Data, ConfigCatServiceToken } from "@green-tube-demo/models";

@Component({
    selector:'green-tube-demo-cat',
    templateUrl:'./cat.component.html',
    styleUrls:['./cat.component.scss']

})
export class CatComponent{

    constructor( @Inject(ConfigCatServiceToken) public  data:Data){  }
}