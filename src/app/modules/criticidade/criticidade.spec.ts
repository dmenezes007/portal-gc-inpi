import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Criticidade } from './criticidade';

describe('Criticidade', () => {
  let component: Criticidade;
  let fixture: ComponentFixture<Criticidade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Criticidade]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Criticidade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
