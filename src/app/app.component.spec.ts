import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Application } from './app.component';

describe('Application Component', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Application],
      imports: [
        IonicModule.forRoot(Application)
      ],
      providers: [
        StatusBar,
        SplashScreen
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Application);
    component = fixture.componentInstance;
  });

  it ('should be created', () => {
    expect(component instanceof Application).toBe(true);
  });

  it ('should have one page', () => {
    expect(component.pages.length).toBe(1);
  });

});