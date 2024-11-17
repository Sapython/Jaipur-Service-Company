import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AwardCertifcatePage } from './award-certifcate.page';

describe('AwardCertifcatePage', () => {
  let component: AwardCertifcatePage;
  let fixture: ComponentFixture<AwardCertifcatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AwardCertifcatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
