import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSolucaoComponent } from './delete-solucao.component';

describe('DeleteSolucaoComponent', () => {
  let component: DeleteSolucaoComponent;
  let fixture: ComponentFixture<DeleteSolucaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSolucaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSolucaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
