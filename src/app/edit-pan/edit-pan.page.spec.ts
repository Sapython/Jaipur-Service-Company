import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditPanPage } from './edit-pan.page';

describe('EditPanPage', () => {
  let component: EditPanPage;
  let fixture: ComponentFixture<EditPanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditPanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
