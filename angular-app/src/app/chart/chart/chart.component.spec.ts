import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartComponent } from './chart.component';

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`shows the value in an <input>`, () => {
    fixture = TestBed.createComponent(ChartComponent);
    fixture.componentInstance.maleCount = 60;
    fixture.changeDetectorRef.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('input').value).toEqual('60');
  });

  it(`shows the value in an <input>`, () => {
    fixture = TestBed.createComponent(ChartComponent);
    fixture.componentInstance.femaleCount = 40;
    fixture.changeDetectorRef.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('input').value).toEqual('40');
  });

  // it('should emit an event', () => {
  //   let point;
  //   fixture.componentInstance.sendSexToParent(event)
  //     .subscribe((value) => point = value);
  //   expect(point).toBe('male');
  //   expect(point).toBe('female');
  // });
});
