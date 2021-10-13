import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { ModalService } from './modal.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {
  @Input() title: string = "";
  @Input() id: string ="";
  private element: any;
  constructor(private modalService: ModalService, private elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
  }

  ngOnInit(): void {
    document.body.appendChild(this.element);
    this.modalService.add(this);
    this.element.addEventListener('click', (e:any) => {
      if (e.target.classList == 'modal-bg') {
          this.close();
      }
  });
  }
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }
  open(): void {
    this.element.style.visibility = 'initial';
    document.body.classList.add('modal-open');
  }
  close(): void {
    this.element.style.visibility = 'hidden';
    document.body.classList.remove('modal-open');
  }


}
