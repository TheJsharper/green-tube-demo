import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ConfigDogServiceToken, Data } from '@green-tube-demo/models';
import { DogComponent } from './dog.component';
import { DogSerrvice } from './services/dog.service';

@NgModule({
  declarations: [DogComponent],
  imports: [CommonModule /*ShareModule*/],
  exports: [DogComponent],
  providers:[DogSerrvice]
})
export class DogModule {
  static config(data: Data): ModuleWithProviders<DogModule> {
    return {
      providers: [
        DogSerrvice,
        { provide: ConfigDogServiceToken, useValue: data },
        ...data.providers,
      ],
      ngModule: DogModule,
    };
  }
}
