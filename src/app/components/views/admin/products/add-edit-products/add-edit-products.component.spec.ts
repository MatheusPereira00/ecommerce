import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProductsComponent } from './add-edit-products.component';

describe('AddEditProductsComponent', () => {
  let component: AddEditProductsComponent;
  let fixture: ComponentFixture<AddEditProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddEditProductsComponent]
    });
    fixture = TestBed.createComponent(AddEditProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
