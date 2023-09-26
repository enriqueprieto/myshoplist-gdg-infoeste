import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFormDialogComponent } from '.';

describe('ListaFormDialogComponent', () => {
  let component: ListaFormDialogComponent;
  let fixture: ComponentFixture<ListaFormDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaFormDialogComponent]
    });
    fixture = TestBed.createComponent(ListaFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
