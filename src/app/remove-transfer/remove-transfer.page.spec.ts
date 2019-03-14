import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveTransferPage } from './remove-transfer.page';

describe('RemoveTransferPage', () => {
  let component: RemoveTransferPage;
  let fixture: ComponentFixture<RemoveTransferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveTransferPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveTransferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
