import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';


@Component({
  selector: 'app-modal-dialog-scrollable',
  templateUrl: './modal-dialog-scrollable.component.html',
  styleUrls: ['./modal-dialog-scrollable.component.scss']
})
export class ModalDialogScrollableComponent {

  constructor(public modalRef: MdbModalRef<ModalDialogScrollableComponent>) {}

}
