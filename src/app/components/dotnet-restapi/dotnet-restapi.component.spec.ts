import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotnetRestapiComponent } from './dotnet-restapi.component';

describe('DotnetRestapiComponent', () => {
  let component: DotnetRestapiComponent;
  let fixture: ComponentFixture<DotnetRestapiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DotnetRestapiComponent]
    });
    fixture = TestBed.createComponent(DotnetRestapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
