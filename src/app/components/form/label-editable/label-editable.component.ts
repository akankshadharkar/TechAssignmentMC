import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TextEditable } from '../../../model/text-editable';


@Component({
  selector: 'app-label-editable',
  templateUrl: './label-editable.component.html',
  styleUrls: ['./label-editable.component.scss']
})
export class LabelEditableComponent implements OnInit {

  @Input() txt: string;
  @Input() valType: string;
  @Output() valWasChanged = new EventEmitter<TextEditable>();

  isEditing = false;

  retData: TextEditable;

  constructor() { }

  ngOnInit() {
  }

  akuClick(){
  	this.isEditing = true;
  }

  onEnter(value: string) {
  	this.txt = value;
  	this.isEditing = false;

    let dataObj = {};
    dataObj.val = this.txt;
    dataObj.valType = this.valType;

    this.retData = dataObj;
  	this.valWasChanged.emit(dataObj);
  }
}
