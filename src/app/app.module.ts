import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { AppVersion } from '@ionic-native/app-version';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { Application } from './app.component';
import { PAGES, DEEP_LINKS as links } from '../components';
import { Providers } from '../providers';

const COMPONENTS: any = [
    Application,
    ...PAGES
];

const providers: any = [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AppVersion,
    StatusBar,
    SplashScreen,
    ...Providers
];

@NgModule({
    declarations: COMPONENTS,
    entryComponents: COMPONENTS,
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(Application, {}, { links }),
        IonicStorageModule.forRoot()
    ],
    bootstrap: [IonicApp],
    providers
})
export class AppModule {}
