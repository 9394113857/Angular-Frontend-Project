import { TestBed } from '@angular/core/testing';

import { DjangoRestapiServiceService } from './django-restapi-service.service';

describe('DjangoRestapiServiceService', () => {
  let service: DjangoRestapiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DjangoRestapiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
