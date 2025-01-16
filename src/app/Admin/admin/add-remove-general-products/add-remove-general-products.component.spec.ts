import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveGeneralProductsComponent } from './add-remove-general-products.component';

describe('AddRemoveGeneralProductsComponent', () => {
  let component: AddRemoveGeneralProductsComponent;
  let fixture: ComponentFixture<AddRemoveGeneralProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRemoveGeneralProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRemoveGeneralProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
