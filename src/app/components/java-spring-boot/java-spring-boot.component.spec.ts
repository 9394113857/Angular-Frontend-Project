import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaSpringBootComponent } from './java-spring-boot.component';

describe('JavaSpringBootComponent', () => {
  let component: JavaSpringBootComponent;
  let fixture: ComponentFixture<JavaSpringBootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JavaSpringBootComponent]
    });
    fixture = TestBed.createComponent(JavaSpringBootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
