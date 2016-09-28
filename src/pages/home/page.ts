import { Component } from '@angular/core';

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
            <ion-title>Ionic seed</ion-title>
        </ion-navbar>
    </ion-header>

    <ion-content padding class="home">
        <h2>Hello world!</h2>
    </ion-content>
  `,
})
export class HomePage {}