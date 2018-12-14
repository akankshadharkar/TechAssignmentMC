import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImgViewerComponent } from './img-viewer/img-viewer.component';
import { ReportDetailsComponent } from './report-details/report-details.component';
import { LabelEditableComponent } from './components/form/label-editable/label-editable.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgViewerComponent,
    ReportDetailsComponent,
    LabelEditableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
