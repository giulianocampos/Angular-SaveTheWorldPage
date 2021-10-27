import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSolucaoComponent } from './update-solucao.component';

describe('UpdateSolucaoComponent', () => {
  let component: UpdateSolucaoComponent;
  let fixture: ComponentFixture<UpdateSolucaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSolucaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSolucaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
