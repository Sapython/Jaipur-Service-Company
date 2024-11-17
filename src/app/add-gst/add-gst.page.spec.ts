import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddGstPage } from './add-gst.page';

describe('AddGstPage', () => {
  let component: AddGstPage;
  let fixture: ComponentFixture<AddGstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddGstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
