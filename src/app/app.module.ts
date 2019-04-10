import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { HighchartsChartModule} from 'highcharts-angular';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart/chart.component';
import { DataPipePipe } from './data-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    jqxGridComponent,
    ChartComponent,
    DataPipePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HighchartsChartModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
