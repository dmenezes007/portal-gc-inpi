import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Metodologia } from './metodologia';

describe('Metodologia', () => {
  let component: Metodologia;
  let fixture: ComponentFixture<Metodologia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Metodologia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Metodologia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
