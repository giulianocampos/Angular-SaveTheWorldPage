import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaibaMais3Component } from './saiba-mais3.component';

describe('SaibaMais3Component', () => {
  let component: SaibaMais3Component;
  let fixture: ComponentFixture<SaibaMais3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaibaMais3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaibaMais3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
