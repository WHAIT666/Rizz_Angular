import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingapiComponent } from './bookingapi.component';

describe('BookingapiComponent', () => {
  let component: BookingapiComponent;
  let fixture: ComponentFixture<BookingapiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingapiComponent]
    });
    fixture = TestBed.createComponent(BookingapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
