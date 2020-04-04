import { TestBed, inject } from '@angular/core/testing';

import { LibraryEventManagementService } from './library-event-management.service';

describe('EventManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibraryEventManagementService]
    });
  });

  it('should be created', inject([LibraryEventManagementService], (service: LibraryEventManagementService) => {
    expect(service).toBeTruthy();
  }));
});
