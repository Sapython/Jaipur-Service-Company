import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompletedJobPage } from './completed-job.page';

describe('CompletedJobPage', () => {
  let component: CompletedJobPage;
  let fixture: ComponentFixture<CompletedJobPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CompletedJobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
