import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbootstrapComponent } from './ngbootstrap.component';

describe('NgbootstrapComponent', () => {
  let component: NgbootstrapComponent;
  let fixture: ComponentFixture<NgbootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
