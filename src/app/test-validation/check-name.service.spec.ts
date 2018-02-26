import { TestBed, inject } from '@angular/core/testing';

import { CheckNameService } from './check-name.service';

describe('CheckNameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckNameService]
    });
  });

  it('should be created', inject([CheckNameService], (service: CheckNameService) => {
    expect(service).toBeTruthy();
  }));
});
