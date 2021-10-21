import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaibaMais2Component } from './saiba-mais2.component';

describe('SaibaMais2Component', () => {
  let component: SaibaMais2Component;
  let fixture: ComponentFixture<SaibaMais2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaibaMais2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaibaMais2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
