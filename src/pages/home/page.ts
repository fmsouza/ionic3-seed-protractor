import {Component} from '@angular/core';
import strings from '../../strings';

/**
 * HomePage class is the Home view controller
 * 
 * @class {HomePage}
 */
@Component({
    template: `
        <ion-header>
            <ion-navbar>
                <button ion-button menuToggle>
                    <ion-icon name="menu"></ion-icon>
                </button>
                <ion-title>{{ Text.PAGE_HOME_TITLE }}</ion-title>
            </ion-navbar>
        </ion-header>

        <ion-content padding class="home">
            <h2>{{ Text.PAGE_HOME_CONTENT }}</h2>
        </ion-content>
        `,
})
export class HomePage {

    public get Text(): any {
        return strings;
    }
}