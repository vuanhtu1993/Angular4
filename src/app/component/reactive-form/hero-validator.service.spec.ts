import { TestBed, inject } from '@angular/core/testing';

import { HeroValidatorService } from './hero-validator.service';

describe('HeroValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroValidatorService]
    });
  });

  it('should be created', inject([HeroValidatorService], (service: HeroValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
