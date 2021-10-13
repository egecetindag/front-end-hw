import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-advantage-item',
  templateUrl: './advantage-item.component.html',
  styleUrls: ['./advantage-item.component.less']
})
export class AdvantageItemComponent implements OnInit {
  @Input() title: string ='';
  @Input() text: string ='';
  @Input() icon: string ='';
  
  constructor() { }

  ngOnInit(): void {
  }

}
