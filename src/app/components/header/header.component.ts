import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  menuOpen: boolean = false;
  changeMenuOpen(){
    this.menuOpen = !this.menuOpen;
  }
  ngOnInit(): void {
  }

}
