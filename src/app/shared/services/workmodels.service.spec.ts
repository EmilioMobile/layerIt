import { TestBed, inject } from '@angular/core/testing';

import { WorkmodelsService } from './workmodels.service';

describe('WorkmodelsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkmodelsService]
    });
  });

  it('should be created', inject([WorkmodelsService], (service: WorkmodelsService) => {
    expect(service).toBeTruthy();
  }));
});
