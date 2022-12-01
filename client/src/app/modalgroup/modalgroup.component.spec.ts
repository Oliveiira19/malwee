import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalgroupComponent } from './modalgroup.component';

describe('ModalgroupComponent', () => {
  let component: ModalgroupComponent;
  let fixture: ComponentFixture<ModalgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalgroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
