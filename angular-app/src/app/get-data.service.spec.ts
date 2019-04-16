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

  it('should return an observable', async(inject([GetDataService], (service: GetDataService) => {
    service.getData(1, 10).subscribe((data: any) => {
      expect(data.length).toBe(10);
    });
  })));

  it('should have getMaleCount function', () => {
    const service: GetDataService = TestBed.get(GetDataService);
    expect(service.getMaleCount).toBeTruthy();
  });

  it('should have getFemaleCount function', () => {
    const service: GetDataService = TestBed.get(GetDataService);
    expect(service.getFemaleCount).toBeTruthy();
  });


});
