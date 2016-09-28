import { NgModule } from '@angular/core';

import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Application } from './app.component';

import { HomePage } from '../pages/home/page';

const COMPONENTS: any = [
  Application,
  HomePage
];

const PROVIDERS: any = [
  Storage
];

@NgModule({
  declarations: COMPONENTS,
  entryComponents: COMPONENTS,
  imports: [
    IonicModule.forRoot(Application)
  ],
  bootstrap: [IonicApp],
  providers: PROVIDERS
})
export class AppModule {}
