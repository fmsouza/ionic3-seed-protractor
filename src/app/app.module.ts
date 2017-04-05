import { Application } from './app.component';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Components } from '../components';
import { Providers } from '../providers';

const COMPONENTS: any = [
    Application,
    ...Components
];

const PROVIDERS: any = [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage,
    ...Providers
];

@NgModule({
    declarations: COMPONENTS,
    entryComponents: COMPONENTS,
    imports: [
        BrowserModule,
        HttpModule,
        IonicStorageModule.forRoot(),
        IonicModule.forRoot(Application)
    ],
    bootstrap: [IonicApp],
    providers: PROVIDERS
})
export class AppModule {}
