import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TakeSelfiePage } from './take-selfie.page';

describe('TakeSelfiePage', () => {
  let component: TakeSelfiePage;
  let fixture: ComponentFixture<TakeSelfiePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TakeSelfiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
