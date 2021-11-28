import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LcsmComponent } from './lcsm.component';

describe('LcsmComponent', () => {
  let component: LcsmComponent;
  let fixture: ComponentFixture<LcsmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LcsmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LcsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
