import { environment } from './../environments/environment';
import { AppSpainCatService } from './services/app.spain-cat.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CatModule } from '@green-tube-demo/cat';
import { DogModule } from '@green-tube-demo/dog';
import { AppSpainDogService } from './services/app.spain-dog.service';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    DogModule.config({ name: 'David', from: 'Spain', providers: [AppSpainDogService] , env:environment}),
    CatModule.config({ name: 'Lena', from: 'Spain', providers: [AppSpainCatService], env:environment }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
