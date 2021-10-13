import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.less']
})
export class SigninComponent implements OnInit {

  activeBtn:number=2;
  constructor() { }
  activateBtn(btn:number) {
    this.activeBtn = btn;
  }
  ngOnInit(): void {
  }

}
