import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakestoreComponent } from './fakestore.component';

describe('FakestoreComponent', () => {
  let component: FakestoreComponent;
  let fixture: ComponentFixture<FakestoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FakestoreComponent]
    });
    fixture = TestBed.createComponent(FakestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
