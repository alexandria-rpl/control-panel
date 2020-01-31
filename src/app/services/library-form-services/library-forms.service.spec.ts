import { TestBed, inject } from '@angular/core/testing';

import { LibraryFormsService } from './library-forms.service';

describe('LibraryFormsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibraryFormsService]
    });
  });

  it('should be created', inject([LibraryFormsService], (service: LibraryFormsService) => {
    expect(service).toBeTruthy();
  }));
});
