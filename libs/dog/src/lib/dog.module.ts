import { ShareModule } from '@green-tube-demo/share';
import { DogComponent } from './dog.component';
import { InjectionToken, ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogSerrvice } from './services/dog.service';

export const DogServiceToken = new InjectionToken<Data>("DogToken")

@NgModule({
  declarations:[DogComponent],
imports: [CommonModule, /*ShareModule*/],
  exports:[DogComponent], 
  //providers:[DogSerrvice]
})
export class DogModule {
  static data?:Data;
   static config(data: Data ):ModuleWithProviders<DogModule>  {
    this.data = data;
    return {
      
			 providers: [ DogSerrvice, { provide:DogComponent, useValue:data},...data.providers],
      ngModule: DogModule, 
		};
   }
}

export  interface Data{
  name:string;
  providers: Provider[]
}

