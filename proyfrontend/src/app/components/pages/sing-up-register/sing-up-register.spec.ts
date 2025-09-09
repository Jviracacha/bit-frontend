import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingUpRegister } from './sing-up-register';

describe('SingUpRegister', () => {
  let component: SingUpRegister;
  let fixture: ComponentFixture<SingUpRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingUpRegister]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingUpRegister);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
