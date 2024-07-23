import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal-front',
  templateUrl: './modal-front.component.html',
  styleUrls: ['./modal-front.component.scss']
})
export class ModalFrontComponent {

  constructor(public modalRef: MdbModalRef<ModalFrontComponent>){}

}
