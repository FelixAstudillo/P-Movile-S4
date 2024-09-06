import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LePage } from './le.page';

describe('LePage', () => {
  let component: LePage;
  let fixture: ComponentFixture<LePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
