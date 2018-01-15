import { TestBed, inject } from '@angular/core/testing';

import { LoadImageService } from './load-image.service';

describe('LoadImageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadImageService]
    });
  });

  it('should be created', inject([LoadImageService], (service: LoadImageService) => {
    expect(service).toBeTruthy();
  }));
});
