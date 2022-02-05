import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {CatModule} from '@green-tube-demo/cat';
import {DogModule} from '@green-tube-demo/dog';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, CatModule, DogModule.config({name:"Test  from Spain", providers:[]})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
