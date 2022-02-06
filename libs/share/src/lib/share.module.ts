import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCatService } from './services/app.romania-cat.service';
import { AppSpainCatService } from './services/app.spain-cat.service';
import { AppDogService } from './services/app.romania-dog.service';
import { AppSpainDogService } from './services/app.spain-dog.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    AppCatService,
    AppDogService,
    AppSpainCatService,
    AppSpainDogService,
  ],
})
export class ShareModule {}
