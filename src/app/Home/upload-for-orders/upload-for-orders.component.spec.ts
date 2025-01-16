import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadForOrdersComponent } from './upload-for-orders.component';

describe('UploadForOrdersComponent', () => {
  let component: UploadForOrdersComponent;
  let fixture: ComponentFixture<UploadForOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadForOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadForOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
