import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CatModule } from '@green-tube-demo/cat';
import { DogModule } from '@green-tube-demo/dog';
import { AppCatService, AppDogService, ShareModule } from '@green-tube-demo/share';
import { environment } from './../environments/environment';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';


@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    ShareModule,
    DogModule.config({ name: 'David', from: 'Spain', providers: [AppDogService] , env:environment}),
    CatModule.config({ name: 'Lena', from: 'Spain', providers: [AppCatService], env:environment }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

  constructor(private appCatService:AppCatService, private appDogService:AppDogService){
    this.appCatService.config = "SPAIN CAT serves from CatService share lib";
    this.appDogService.config = "SPAIN DOG serves from CatService share lib";
  }
}
