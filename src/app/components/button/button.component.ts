import { Component, OnInit, Input, Output  } from '@angular/core';
// import * as EventEmitter from 'events';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {
  @Input() text: string ='';
  @Input() width: string ='';
  // @Output() btnClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    // this.btnClick.emit();
  }

}
