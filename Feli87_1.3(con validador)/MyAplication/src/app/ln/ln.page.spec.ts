import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LNPage } from './ln.page';

describe('LNPage', () => {
  let component: LNPage;
  let fixture: ComponentFixture<LNPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LNPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
