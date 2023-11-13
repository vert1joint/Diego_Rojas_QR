import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IniciarAlumPage } from './iniciar-alum.page';

describe('IniciarAlumPage', () => {
  let component: IniciarAlumPage;
  let fixture: ComponentFixture<IniciarAlumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IniciarAlumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
