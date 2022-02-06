import { Injectable } from "@angular/core";

@Injectable()
export class AppDogService{

    
    private _config : string ;
    public get config() : string {
        return this._config;
    }
    public set config(v : string) {
        this._config = v;
    }
    constructor(){ this._config = "default set contructor"}

    
    
}