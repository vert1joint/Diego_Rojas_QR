import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrlistPage } from './qrlist.page';

describe('QrlistPage', () => {
  let component: QrlistPage;
  let fixture: ComponentFixture<QrlistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QrlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
