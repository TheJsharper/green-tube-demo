import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ConfigCatServiceToken, Data } from '@green-tube-demo/models';
import { ShareModule } from '@green-tube-demo/share';
import { CatViewModule } from './cat-view.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ShareModule, CatViewModule],
  exports: [CatViewModule],
})
export class CatModule {
  static config(data: Data): ModuleWithProviders<CatModule> {
    return {
      ngModule: CatModule,
      providers: [{ provide: ConfigCatServiceToken, useValue: data,  }, ... data.providers],
    };
  }
}
