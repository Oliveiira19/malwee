import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubgroupomodalComponent } from './subgroupomodal.component';

describe('SubgroupomodalComponent', () => {
  let component: SubgroupomodalComponent;
  let fixture: ComponentFixture<SubgroupomodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubgroupomodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubgroupomodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
