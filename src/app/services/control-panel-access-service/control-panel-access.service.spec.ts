import { TestBed, inject } from '@angular/core/testing';

import { ControlPanelAccessService } from './control-panel-access.service';

describe('ControlPanelAccessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ControlPanelAccessService]
    });
  });

  it('should be created', inject([ControlPanelAccessService], (service: ControlPanelAccessService) => {
    expect(service).toBeTruthy();
  }));
});
