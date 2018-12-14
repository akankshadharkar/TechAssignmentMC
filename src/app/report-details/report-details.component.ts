import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ImgFile } from '../model/ImgFile';


@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss']
})
export class ReportDetailsComponent implements OnInit {
	@Input() report: ImgFile;
	@Output() hideReport = new EventEmitter<boolean>();
  @Output() reportChanged = new EventEmitter<ImgFile>();

  constructor() { }

  ngOnInit() {
  }

  textWasChanged(data){
    this.reportChanged.emit(data);
  }

  closeReport(){
  	this.report = null;
  	this.hideReport.emit(true);
  }

}
