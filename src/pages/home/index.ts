import { AppVersion } from '@ionic-native/app-version';
import { Component } from '@angular/core';
import strings from '../../strings';

/**
 * HomePage class is the Home view controller
 *
 * @class {HomePage}
 */
@Component({
    selector: 'page-home',
    templateUrl: 'template.html',
})
export class HomePage {

    public get Text(): any {
        return strings;
    }

    public packageName: string = '';

    public constructor(private appVersion: AppVersion) {}

    public ionViewWillLoad(): void {
      this.appVersion.getPackageName()
        .then(packageName => this.packageName = packageName);
    }
}
