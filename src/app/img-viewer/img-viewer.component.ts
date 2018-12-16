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

  constructor() { }
  ngOnInit() {}

  reportWasSelected(sReport): void{
  	this.selectedReport = sReport;

    this.iSelectedAReport.emit(sReport);

    this.newtxt =  sReport.id;
  }

  changeSelectedVal(val){
    this.selectedReport.id = val;
  }
}
