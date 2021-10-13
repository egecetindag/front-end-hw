import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  constructor(private modalService: ModalService) { }
  menuOpen: boolean = false;
  changeMenuOpen() {
    this.menuOpen = !this.menuOpen;
  }
  ngOnInit(): void {
  }
  openModal(id: string) {
    this.modalService.open(id);
  }

}
