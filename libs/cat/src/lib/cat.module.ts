import { Data, ConfigCatServiceToken } from '@green-tube-demo/models';
import { CatComponent } from './cat.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '@green-tube-demo/share';

@NgModule({
  declarations: [CatComponent],
  imports: [CommonModule, ShareModule],
  exports: [CatComponent],
})
export class CatModule {
  static config(data: Data): ModuleWithProviders<CatModule> {
    return {
      ngModule: CatModule,
      providers: [{ provide: ConfigCatServiceToken, useValue: data }],
    };
  }
}
