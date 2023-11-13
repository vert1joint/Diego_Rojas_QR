import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecpcontraPage } from './recpcontra.page';

describe('RecpcontraPage', () => {
  let component: RecpcontraPage;
  let fixture: ComponentFixture<RecpcontraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecpcontraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
