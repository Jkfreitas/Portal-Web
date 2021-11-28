import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutrasCategoriasComponent } from './outras-categorias.component';

describe('OutrasCategoriasComponent', () => {
  let component: OutrasCategoriasComponent;
  let fixture: ComponentFixture<OutrasCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutrasCategoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutrasCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
