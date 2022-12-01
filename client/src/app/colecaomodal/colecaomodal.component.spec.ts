import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColecaomodalComponent } from './colecaomodal.component';

describe('ColecaomodalComponent', () => {
  let component: ColecaomodalComponent;
  let fixture: ComponentFixture<ColecaomodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColecaomodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColecaomodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
