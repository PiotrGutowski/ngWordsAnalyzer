import { TestBed } from '@angular/core/testing';
import { WelcomeCeo } from './welcome-ceo';

describe('WelcomeCeoService', () => {
  let service: WelcomeCeo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WelcomeCeo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
