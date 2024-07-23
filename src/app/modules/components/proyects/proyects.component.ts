import { Component } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalBackComponent } from 'src/app/shared/modal-back/modal-back.component';
import { ModalDialogScrollableComponent } from 'src/app/shared/modal-dialog-scrollable/modal-dialog-scrollable.component';
import { ModalFrontComponent } from 'src/app/shared/modal-front/modal-front.component';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent {

  modalRef: MdbModalRef<ModalDialogScrollableComponent> | null = null;
  modalBack: MdbModalRef<ModalBackComponent> | null = null;
  modalFront: MdbModalRef<ModalFrontComponent> | null = null;

  constructor(private modalService: MdbModalService) {}

  openModal() {
    this.modalRef = this.modalService.open(ModalDialogScrollableComponent);
  }
  openModalBack(){
    this.modalBack = this.modalService.open(ModalBackComponent);
  }
  openModalFront(){
    this.modalFront = this.modalService.open(ModalFrontComponent);
  }

  proyectos = [
    {
      tienDeploy: false,
      titulo: 'Ecommerce Powerfit',
      imagenUrl: 'assets/img/ecommerce780x520.jpg',
      descripcion: 'Descripción de Ecommerce Powerfit',
      tecnologias: '#Angular #java #spring-boot',
      githubUrl: 'https://github.com/Abel3581/powerfit-ecommerce',
      youtubeUrl: 'https://youtu.be/tsfhSiXNHmg'
    },
    {
      tienDeploy: false,
      titulo: 'Ecommerce Ecologico Sport',
      imagenUrl: 'assets/img/ecosport780x520.jpg',
      descriptcion: '',
      tecnologias: '#React #java #spring-boot',
      githubUrl: 'https://github.com/Abel3581/s4-06-m-backend-nuevo'
    },
    {
      tienDeploy: true,
      titulo: 'Consultorio médico',
      imagenUrl: 'assets/img/consultorio780x520.jpg',
      descriptcion: '',
      tecnologias: '#Html5 #css3 #JavaScript #Bootstrap',
      githubUrl: 'https://github.com/Abel3581/consultorioMedico',
      deployUrl: 'https://abel3581.github.io/consultorioMedico/'
    }
  ];

}
