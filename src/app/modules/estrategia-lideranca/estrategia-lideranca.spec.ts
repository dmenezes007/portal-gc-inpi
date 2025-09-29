import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrategiaLideranca } from './estrategia-lideranca';

describe('EstrategiaLideranca', () => {
  let component: EstrategiaLideranca;
  let fixture: ComponentFixture<EstrategiaLideranca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstrategiaLideranca]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstrategiaLideranca);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
