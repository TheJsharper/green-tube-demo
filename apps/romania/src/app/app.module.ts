
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CatModule } from '@green-tube-demo/cat';
import { DogModule } from '@green-tube-demo/dog';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { NxWelcomeComponent } from './nx-welcome.component';


@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, CatModule, DogModule.config({name:"Tests", providers:[AppService]})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
