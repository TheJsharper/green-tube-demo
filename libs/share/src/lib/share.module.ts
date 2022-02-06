import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppCatService } from './services/app.cat.service';
import { AppDogService } from './services/app.dog.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    AppCatService,
    AppDogService
  ],
})
export class ShareModule {}
