import { TestBed } from '@angular/core/testing';

import { PostregisterService } from './postregister.service';

describe('PostregisterService', () => {
  let service: PostregisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostregisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
