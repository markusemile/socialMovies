import { TestBed } from '@angular/core/testing';

import { MdbApiConnectionService } from './mdb-api-connection.service';

describe('MdbApiConnectionService', () => {
  let service: MdbApiConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MdbApiConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
