import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomicidiosDolososComponent } from './homicidios-dolosos.component';

describe('HomicidiosDolososComponent', () => {
  let component: HomicidiosDolososComponent;
  let fixture: ComponentFixture<HomicidiosDolososComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomicidiosDolososComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomicidiosDolososComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
