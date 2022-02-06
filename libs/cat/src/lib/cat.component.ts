import { Component, Inject } from '@angular/core';
import { ConfigCatServiceToken, Data } from '@green-tube-demo/models';
import {
    AppCatService
} from '@green-tube-demo/share';

@Component({
  selector: 'green-tube-demo-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss'],
})
export class CatComponent {
  constructor(
    @Inject(ConfigCatServiceToken) public data: Data,
    private AppCatService: AppCatService
  ) {
    console.log('===>x', this.AppCatService);
  }
}
