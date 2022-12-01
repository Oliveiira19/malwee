import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutomodalComponent } from './produtomodal.component';

describe('ProdutomodalComponent', () => {
  let component: ProdutomodalComponent;
  let fixture: ComponentFixture<ProdutomodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutomodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutomodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
