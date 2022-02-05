import { CommonModule } from '@angular/common';
import { CatComponent } from './cat.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations:[CatComponent],
    imports:[CommonModule],
    exports:[CatComponent]
})
export class CatViewModule{}