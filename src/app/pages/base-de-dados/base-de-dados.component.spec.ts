import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDeDadosComponent } from './base-de-dados.component';

describe('BaseDeDadosComponent', () => {
  let component: BaseDeDadosComponent;
  let fixture: ComponentFixture<BaseDeDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseDeDadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseDeDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
