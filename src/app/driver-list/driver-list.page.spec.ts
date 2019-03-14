import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverListPage } from './driver-list.page';

describe('DriverListPage', () => {
  let component: DriverListPage;
  let fixture: ComponentFixture<DriverListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
