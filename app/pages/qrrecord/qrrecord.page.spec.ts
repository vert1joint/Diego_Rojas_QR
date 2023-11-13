import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrrecordPage } from './qrrecord.page';

describe('QrrecordPage', () => {
  let component: QrrecordPage;
  let fixture: ComponentFixture<QrrecordPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QrrecordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
