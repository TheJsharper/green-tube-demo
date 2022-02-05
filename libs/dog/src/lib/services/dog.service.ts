import { Inject, Injectable } from "@angular/core";
import { Data, ConfigDogServiceToken } from "@green-tube-demo/models";

@Injectable()
export class DogSerrvice{
    
    constructor(@Inject(ConfigDogServiceToken) private  servicve:Data){}


    getData():Data{
        return this.servicve;
    }
}