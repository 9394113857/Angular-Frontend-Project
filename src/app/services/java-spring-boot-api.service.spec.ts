import { TestBed } from '@angular/core/testing';

import { JavaSpringBootApiService } from './java-spring-boot-api.service';

describe('JavaSpringBootApiService', () => {
  let service: JavaSpringBootApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JavaSpringBootApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
