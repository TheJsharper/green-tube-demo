import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CatModule } from '@green-tube-demo/cat';
import { DogModule } from '@green-tube-demo/dog';
import { AppCatService, ShareModule, AppDogService } from '@green-tube-demo/share';
import { environment } from './../environments/environment';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';


@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    ShareModule,
    CatModule.config({
      name: 'Pedro',
      from: 'Romania',
      providers: [AppCatService],
      env: environment,
    }),
    DogModule.config({
      name: 'Philipp',
      from: 'Romania',
      providers: [AppDogService],
      env: environment,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

  constructor(private appRomaniaCatService: AppCatService,  private appRomaniaDogService: AppDogService){
    this.appRomaniaCatService.config = "ROMANIAN CAT serves from CatService share lib";
    this.appRomaniaDogService.config = "ROMANIAN DOG serves from DogService share lib";
  }
}
