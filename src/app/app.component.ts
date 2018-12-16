import { Component } from '@angular/core';
import { ImgFile } from './model/ImgFile';
import { REPORTS } from './mock-data/reports';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MedCords';
  selectedReport: ImgFile;
  boolVal = true;

  reports = REPORTS;

  reportWasSelected(sReport){
    this.selectedReport = sReport;
  }

  reportWasChanged(data){

    let currID = this.selectedReport.id;
    if(currID){
      var idx = this.reports.findIndex(r => r.id == currID )
      let currReport = this.reports[idx];

      currReport[data.type] = data.val;
    }
  }

  closeReport(bool){
  	if (bool==true) {
  		this.selectedReport = null;
  	}
  }
}
