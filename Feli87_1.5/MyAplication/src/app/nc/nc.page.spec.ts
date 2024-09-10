import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NcPage } from './nc.page';

describe('NcPage', () => {
  let component: NcPage;
  let fixture: ComponentFixture<NcPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
