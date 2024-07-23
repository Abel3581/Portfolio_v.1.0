import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal-back',
  templateUrl: './modal-back.component.html',
  styleUrls: ['./modal-back.component.scss']
})
export class ModalBackComponent {
  constructor(public modalRef: MdbModalRef<ModalBackComponent>) {}
}
