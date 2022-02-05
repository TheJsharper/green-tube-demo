import { Injectable } from "@angular/core";

@Injectable()
export class SharedService{
    
    private _configData ?: string;
    public get configData() : string | undefined {
        return this._configData;
    }
    public set configData(v : string | undefined) {
        this._configData = v;
    }
    
}