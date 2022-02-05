import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ConfigDogServiceToken, Data } from '@green-tube-demo/models';
import { ShareModule } from '@green-tube-demo/share';
import { DogViewModule } from './dog-view.module';
import { DogSerrvice } from './services/dog.service';

@NgModule({
  imports: [CommonModule, ShareModule, DogViewModule],
  exports: [DogViewModule],
  providers: [DogSerrvice],
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
