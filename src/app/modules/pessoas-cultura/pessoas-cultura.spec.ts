import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasCultura } from './pessoas-cultura';

describe('PessoasCultura', () => {
  let component: PessoasCultura;
  let fixture: ComponentFixture<PessoasCultura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PessoasCultura]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoasCultura);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
