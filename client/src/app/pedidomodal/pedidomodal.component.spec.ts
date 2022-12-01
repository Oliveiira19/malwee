import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidomodalComponent } from './pedidomodal.component';

describe('PedidomodalComponent', () => {
  let component: PedidomodalComponent;
  let fixture: ComponentFixture<PedidomodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidomodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidomodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
