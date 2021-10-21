import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaibaMais1Component } from './saiba-mais1.component';

describe('SaibaMais1Component', () => {
  let component: SaibaMais1Component;
  let fixture: ComponentFixture<SaibaMais1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaibaMais1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaibaMais1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
