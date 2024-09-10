import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CcPage } from './cc.page';

describe('CcPage', () => {
  let component: CcPage;
  let fixture: ComponentFixture<CcPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
