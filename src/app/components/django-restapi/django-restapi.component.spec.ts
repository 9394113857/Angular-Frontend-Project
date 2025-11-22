import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjangoRestapiComponent } from './django-restapi.component';

describe('DjangoRestapiComponent', () => {
  let component: DjangoRestapiComponent;
  let fixture: ComponentFixture<DjangoRestapiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DjangoRestapiComponent]
    });
    fixture = TestBed.createComponent(DjangoRestapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
