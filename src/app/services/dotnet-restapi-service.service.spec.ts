import { TestBed } from '@angular/core/testing';

import { DotnetRestapiServiceService } from './dotnet-restapi-service.service';

describe('DotnetRestapiServiceService', () => {
  let service: DotnetRestapiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DotnetRestapiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
