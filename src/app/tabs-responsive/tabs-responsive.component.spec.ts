import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsResponsiveComponent } from './tabs-responsive.component';

describe('TabsResponsiveComponent', () => {
  let component: TabsResponsiveComponent;
  let fixture: ComponentFixture<TabsResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsResponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
