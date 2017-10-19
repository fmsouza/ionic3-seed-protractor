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
}
