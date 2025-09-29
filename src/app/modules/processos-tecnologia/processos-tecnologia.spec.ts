import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessosTecnologia } from './processos-tecnologia';

describe('ProcessosTecnologia', () => {
  let component: ProcessosTecnologia;
  let fixture: ComponentFixture<ProcessosTecnologia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessosTecnologia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessosTecnologia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
