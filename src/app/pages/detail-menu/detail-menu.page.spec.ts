import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailMenuPage } from './detail-menu.page';

describe('DetailMenuPage', () => {
  let component: DetailMenuPage;
  let fixture: ComponentFixture<DetailMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
