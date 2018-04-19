import { TestBed, inject } from '@angular/core/testing';
import { Adminguard } from './adminguard.service';



describe('AdminguardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Adminguard]
    });
  });

  it('should be created', inject([Adminguard], (service: Adminguard) => {
    expect(service).toBeTruthy();
  }));
});
