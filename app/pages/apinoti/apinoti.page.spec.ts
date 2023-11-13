import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApinotiPage } from './apinoti.page';

describe('ApinotiPage', () => {
  let component: ApinotiPage;
  let fixture: ComponentFixture<ApinotiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ApinotiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
