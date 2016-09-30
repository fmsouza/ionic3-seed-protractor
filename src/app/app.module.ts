import {HomePage} from '../pages/home/page';
import {Application} from './app.component';
import {NgModule} from '@angular/core';
import {Storage} from '@ionic/storage';
import {IonicApp, IonicModule} from 'ionic-angular';

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