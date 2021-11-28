import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MviComponent } from './mvi.component';

describe('MviComponent', () => {
  let component: MviComponent;
  let fixture: ComponentFixture<MviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
