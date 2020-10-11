import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListeMenuPage } from './liste-menu.page';

describe('ListeMenuPage', () => {
  let component: ListeMenuPage;
  let fixture: ComponentFixture<ListeMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
