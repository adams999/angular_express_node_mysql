import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaTortaComponent } from './grafica-torta.component';

describe('GraficaTortaComponent', () => {
  let component: GraficaTortaComponent;
  let fixture: ComponentFixture<GraficaTortaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaTortaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaTortaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
