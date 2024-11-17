import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinancialDetailsPage } from './financial-details.page';

describe('FinancialDetailsPage', () => {
  let component: FinancialDetailsPage;
  let fixture: ComponentFixture<FinancialDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FinancialDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
