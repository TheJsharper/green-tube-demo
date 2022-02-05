import { Inject, Injectable } from "@angular/core";
import { Data, DogServiceToken } from "../dog.module";

@Injectable()
export class DogSerrvice{
    
    constructor(@Inject(DogServiceToken) private  servicve:Data){}


    getData():Data{
        return this.servicve;
    }
}