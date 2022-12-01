import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupomodalComponent } from './groupomodal.component';

describe('GroupomodalComponent', () => {
  let component: GroupomodalComponent;
  let fixture: ComponentFixture<GroupomodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupomodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupomodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
