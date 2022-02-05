import { Component, Input } from "@angular/core";

@Component({
    selector:'green-tube-demo-cat',
    templateUrl:'./cat.component.html',
    styleUrls:['./cat.component.scss']

})
export class CatComponent{

    @Input() name?:string ;
}