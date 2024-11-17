import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IdentitySectionPage } from './identity-section.page';

describe('IdentitySectionPage', () => {
  let component: IdentitySectionPage;
  let fixture: ComponentFixture<IdentitySectionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IdentitySectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
