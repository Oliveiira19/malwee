import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientemodalComponent } from './clientemodal.component';

describe('ClientemodalComponent', () => {
  let component: ClientemodalComponent;
  let fixture: ComponentFixture<ClientemodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientemodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
