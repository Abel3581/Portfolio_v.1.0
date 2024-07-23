import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Popover } from 'bootstrap';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalDialogScrollableComponent } from './shared/modal-dialog-scrollable/modal-dialog-scrollable.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  modalRef: MdbModalRef<ModalDialogScrollableComponent> | null = null;

  constructor(private modalService: MdbModalService) {}

  openModal() {
    this.modalRef = this.modalService.open(ModalDialogScrollableComponent)
  }


  ngOnInit(): void {
    AOS.init()
    window.addEventListener('load', AOS.refresh)

  }
  title = 'portfolio';
}
