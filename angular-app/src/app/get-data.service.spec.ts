import {async, inject, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
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

  it('should have putData function', () => {
    const service: GetDataService = TestBed.get(GetDataService);
    expect(service.putData).toBeTruthy();
  });

  it('should return an observable', async(inject([GetDataService], (service: GetDataService) => {
    service.putData('abcd').subscribe((data) => {
      expect(data).toBe('true');
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

  it('retrieves data from database', async(inject([GetDataService], (getDataService) => {
    getDataService.getData().subscribe(result => expect(result.length).toBeGreaterThanOrEqual(10));
  })));

  it('retrieves ColumnName from database', async(inject([GetDataService], (getDataService) => {
    getDataService.getColumnName().subscribe(result => expect(result.length).toBeGreaterThanOrEqual(11));
  })));

});
