import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  constructor(
    private modalService: ModalService
  ) { }

  openModal() {
    this.modalService.open("signup-modal");
  }
  ngOnInit(): void {
  }

}
