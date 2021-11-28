import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatrociniosComponent } from './latrocinios.component';

describe('LatrociniosComponent', () => {
  let component: LatrociniosComponent;
  let fixture: ComponentFixture<LatrociniosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatrociniosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatrociniosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
