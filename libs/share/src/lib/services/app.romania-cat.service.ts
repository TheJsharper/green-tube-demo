import { Injectable } from "@angular/core";

@Injectable()
export class AppCatService{


    
    private _config ?: string ;
    public get config() : string |undefined {
        return this._config;
    }
    public set config(v : string  | undefined) {
        this._config = v;
    }


    
    
}