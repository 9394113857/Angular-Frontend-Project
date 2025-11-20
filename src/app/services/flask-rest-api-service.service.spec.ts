import { TestBed } from '@angular/core/testing';

import { FlaskRestApiServiceService } from './flask-rest-api-service.service';

describe('FlaskRestApiServiceService', () => {
  let service: FlaskRestApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlaskRestApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
