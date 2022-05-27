import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeracaoEnergiaComponent } from './geracao-energia.component';

describe('GeracaoEnergiaComponent', () => {
  let component: GeracaoEnergiaComponent;
  let fixture: ComponentFixture<GeracaoEnergiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeracaoEnergiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeracaoEnergiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
