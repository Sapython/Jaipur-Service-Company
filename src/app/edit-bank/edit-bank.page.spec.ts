import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditBankPage } from './edit-bank.page';

describe('EditBankPage', () => {
  let component: EditBankPage;
  let fixture: ComponentFixture<EditBankPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditBankPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
