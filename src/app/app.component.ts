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

  ankImg: "https://i.pinimg.com/280x280_RS/74/b5/37/74b5375155de22a4ed23ab07de2700ed.jpg"

  reportWasSelected(sReport){
    this.selectedReport = sReport;
  }

  reportWasChanged(data){
    console.log(data);
    let currID = this.selectedReport.id;
    if(currID){
      var idx = this.reports.findIndex(r => r.id == currID )
      let currReport = this.reports[idx];
      currReport[data.valType] = data.val;

      this.closeReport(true);
    }
  }

  closeReport(bool){
  	if (bool==true) {
  		this.selectedReport = null;
  	}
  }
}
