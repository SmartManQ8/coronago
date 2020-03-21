import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './components/info/info.component';
import { DisclaimerModule } from '../../ui-components/disclaimer/disclaimer.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [InfoComponent],
    imports: [
        CommonModule,
        InfoRoutingModule,
        DisclaimerModule,
        IonicModule
    ]
})
export class InfoModule { }