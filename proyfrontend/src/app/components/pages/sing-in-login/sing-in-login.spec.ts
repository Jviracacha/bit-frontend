import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingInlogin } from './sing-in-login';

describe('SingInlogin', () => {
  let component: SingInlogin;
  let fixture: ComponentFixture<SingInlogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingInlogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingInlogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
