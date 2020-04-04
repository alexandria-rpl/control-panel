import { TestBed, inject } from '@angular/core/testing';

import { LibraryFileUploadServiceService } from './library-file-upload-service.service';

describe('LibraryFileUploadServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibraryFileUploadServiceService]
    });
  });

  it('should be created', inject([LibraryFileUploadServiceService], (service: LibraryFileUploadServiceService) => {
    expect(service).toBeTruthy();
  }));
});
