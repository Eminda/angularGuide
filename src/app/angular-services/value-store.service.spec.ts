import { TestBed, inject } from '@angular/core/testing';

import { ValueStoreService } from './value-store.service';

describe('ValueStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValueStoreService]
    });
  });

  it('should be created', inject([ValueStoreService], (service: ValueStoreService) => {
    expect(service).toBeTruthy();
  }));
});
