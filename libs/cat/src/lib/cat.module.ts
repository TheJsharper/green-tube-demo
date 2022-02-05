import { CatComponent } from './cat.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShareModule} from '@green-tube-demo/share';

@NgModule({
  declarations:[CatComponent],
  imports: [CommonModule, ShareModule],
  exports:[CatComponent]
})
export class CatModule {}
