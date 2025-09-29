import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Essencialidade } from './essencialidade';

describe('Essencialidade', () => {
  let component: Essencialidade;
  let fixture: ComponentFixture<Essencialidade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Essencialidade]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Essencialidade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
