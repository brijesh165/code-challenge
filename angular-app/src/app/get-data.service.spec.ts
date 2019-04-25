import {async, inject, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { GetDataService } from './get-data.service';


describe('GetDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [GetDataService],
    imports: [HttpClientModule, HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: GetDataService = TestBed.get(GetDataService);
    expect(service).toBeTruthy();
  });

  it('expects service to fetch data',
      inject([HttpTestingController, GetDataService],
        (httpMock: HttpTestingController, service: GetDataService) => {
          service.getData(1, 10).subscribe((data: any) => {
            expect(data.message.length).toBe(10);
          });

          const req = httpMock.expectOne('http://localhost:3000/getData');
          expect(req.request.method).toEqual('GET');
        }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  it(`should emit 'false' for 404 Ok`, async(inject([HttpTestingController, GetDataService],
    (service: GetDataService, backend: HttpTestingController) => {
      service.getData(1, 10).subscribe((next) => {
        expect(next).toBeFalsy();
      });

      backend.expectOne('/getData').flush(null, {status: 404});
    })));

  it(`should emit 'true' for 200 Ok`, async(inject([HttpTestingController, GetDataService],
    (service: GetDataService, backend: HttpTestingController) => {
      service.getData(1, 10).subscribe((next) => {
        expect(next).toBeTruthy();
      });

      backend.expectOne('/getData').flush(null, {status: 200});
    })));

  it('should have putData function', () => {
    const service: GetDataService = TestBed.get(GetDataService);
    expect(service.putData).toBeTruthy();
  });

  it('should return an observable', async(inject([GetDataService], (service: GetDataService) => {
    service.putData('abcd').subscribe((data) => {
      expect(data).toBe('observable value');
    });
  })));

  it('should have getColumnName function', () => {
    const service: GetDataService = TestBed.get(GetDataService);
    expect(service.getColumnName).toBeTruthy();
  });

  it('should have getData function', () => {
    const service: GetDataService = TestBed.get(GetDataService);
    expect(service.getData).toBeTruthy();
  });

});
