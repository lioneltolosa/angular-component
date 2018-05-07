import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsDinamicsSizeMixinsSassComponent } from './inputs-dinamics-size-mixins-sass.component';

describe('InputsDinamicsSizeMixinsSassComponent', () => {
  let component: InputsDinamicsSizeMixinsSassComponent;
  let fixture: ComponentFixture<InputsDinamicsSizeMixinsSassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputsDinamicsSizeMixinsSassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsDinamicsSizeMixinsSassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
