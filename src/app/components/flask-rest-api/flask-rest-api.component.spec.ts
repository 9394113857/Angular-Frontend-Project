import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlaskRestApiComponent } from './flask-rest-api.component';

describe('FlaskRestApiComponent', () => {
  let component: FlaskRestApiComponent;
  let fixture: ComponentFixture<FlaskRestApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlaskRestApiComponent]
    });
    fixture = TestBed.createComponent(FlaskRestApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
