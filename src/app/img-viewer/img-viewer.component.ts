import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ImgFile } from '../model/ImgFile';
import { TextEditable } from '../model/text-editable';


@Component({
  selector: 'app-img-viewer',
  templateUrl: './img-viewer.component.html',
  styleUrls: ['./img-viewer.component.scss']
})
export class ImgViewerComponent implements OnInit {

  @Input() reports: ImgFile[];
  @Output() iSelectedAReport = new EventEmitter<ImgFile>();

	selectedReport: ImgFile;
  newtxt: TextEditable;

  /*ankName = 'Ankush';
  ankReportType =  'Blood Report';
  ankID = 'abcdef';
*/
  constructor() { }
  ngOnInit() {}

  reportWasSelected(sReport): void{
  	this.selectedReport = sReport;

    this.iSelectedAReport.emit(sReport);

    let dataVal = {};
    dataVal['val'] = sReport.id;

    this.newtxt = dataVal;
  }

  changeSelectedVal(val){
    //alert(val);
    this.selectedReport.id = val;
  }
/*
  akuClick(){
    alert(this.ankName);
  }
*/
}
