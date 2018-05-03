import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxsPersonalizadosComponent } from './checkboxs-personalizados.component';

describe('CheckboxsPersonalizadosComponent', () => {
  let component: CheckboxsPersonalizadosComponent;
  let fixture: ComponentFixture<CheckboxsPersonalizadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxsPersonalizadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxsPersonalizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
