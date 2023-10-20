/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Heroes.service.tsService } from './heroes.service.ts.service';

describe('Service: Heroes.service.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Heroes.service.tsService]
    });
  });

  it('should ...', inject([Heroes.service.tsService], (service: Heroes.service.tsService) => {
    expect(service).toBeTruthy();
  }));
});
