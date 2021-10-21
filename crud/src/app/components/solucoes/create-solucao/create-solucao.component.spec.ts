import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSolucaoComponent } from './create-solucao.component';

describe('CreateSolucaoComponent', () => {
  let component: CreateSolucaoComponent;
  let fixture: ComponentFixture<CreateSolucaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSolucaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSolucaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
