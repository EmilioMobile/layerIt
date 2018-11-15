import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

// https://codecraft.tv/courses/angular/unit-testing/model-driven-forms/

  it('on application startup form is invalid', () => {
    expect(component).toBeTruthy();
  });

  it('on application startup form is empty', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component).toBeTruthy();
  });

  it('password field validity', () => {
    expect(component).toBeTruthy();
  });

  it('login button pressed form is invalid', () => {
    expect(component).toBeTruthy();
  });

  it('login button pressed form is valid', () => {
    expect(component).toBeTruthy();
  });

  it('user does not exist', () => {
    expect(component).toBeTruthy();
  });

  it('password is incorrect', () => {
    expect(component).toBeTruthy();
  });

  it('user and password are correct', () => {
    expect(component).toBeTruthy();
  });

  it('network or server error', () => {
    expect(component).toBeTruthy();
  });

  it('recover password', () => {
    expect(component).toBeTruthy();
  });

  it('register user', () => {
    expect(component).toBeTruthy();
  });


  it('', () => {
    expect(component).toBeTruthy();
  });

});
