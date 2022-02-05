import { environment } from './../environments/environment';

import { AppRomaniaCatService } from './services/app.romania-cat.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CatModule } from '@green-tube-demo/cat';
import { DogModule } from '@green-tube-demo/dog';
import { AppComponent } from './app.component';
import { AppRomaniaDogService } from './services/app.romania-dog.service';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    CatModule.config({name:'Pedro', from:'Romania', providers:[AppRomaniaCatService], env:environment}),
    DogModule.config({ name: 'Philipp', from: "Romania", providers: [AppRomaniaDogService], env:environment }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
