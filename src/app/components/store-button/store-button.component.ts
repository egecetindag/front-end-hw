import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-store-button',
  templateUrl: './store-button.component.html',
  styleUrls: ['./store-button.component.less']
})
export class StoreButtonComponent implements OnInit {

  @Input() text: string ='';
  @Input() icon: string ='';
  @Input() link: string ='';
  
  constructor() { }

  ngOnInit(): void {
  }

}
