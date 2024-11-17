import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EndJobPage } from './end-job.page';

describe('EndJobPage', () => {
  let component: EndJobPage;
  let fixture: ComponentFixture<EndJobPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EndJobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
