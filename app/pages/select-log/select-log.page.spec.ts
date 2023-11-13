import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectLogPage } from './select-log.page';

describe('SelectLogPage', () => {
  let component: SelectLogPage;
  let fixture: ComponentFixture<SelectLogPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelectLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
