
export interface EnvironmentRomania {
  production: boolean;
}
export interface EnvironmentSpain {
  production: boolean;
}

import { InjectionToken, Provider } from '@angular/core';
export const ConfigCatServiceToken = new InjectionToken<Data>("CatToken")
export const ConfigDogServiceToken = new InjectionToken<Data>("DogToken")
export  interface Data{
  name:string;
  from:string;
  providers: Provider[];
  env:EnvironmentSpain | EnvironmentRomania
}