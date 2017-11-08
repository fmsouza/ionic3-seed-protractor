import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule } from 'ionic-angular/index';
import { AppVersion } from '@ionic-native/app-version';
import { HomePage } from './index';

class AppVersionMock extends AppVersion {
  getPackageName(): Promise<string> {
    return Promise.resolve("io.ionic.seed");
  }
}

describe('HomePage', () => {
  let de: DebugElement;
  let comp: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(HomePage)
      ],
      providers: [
        { provide: AppVersion, useClass: AppVersionMock }
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    comp = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should have expected <h2> text', () => {
    fixture.detectChanges();
    const h2 = de.query(By.css('h2')).nativeElement;
    expect(h2.innerText).toEqual("Hello world!", '<h2> should say something about "Hello world!"');
  });

  it('should have expected #pkgname text', () => {
    fixture.detectChanges();
    const span = de.query(By.css('#pkgname')).nativeElement;
    setTimeout(() => {
      expect(span.innerText).toEqual("io.ionic.seed", '<span id="pkgname"> should say "io.ionic.seed"');
    }, 1000);
  });
});
