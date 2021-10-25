import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadSolucaoComponent } from './read-solucao.component';

describe('ReadSolucaoComponent', () => {
  let component: ReadSolucaoComponent;
  let fixture: ComponentFixture<ReadSolucaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadSolucaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadSolucaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
