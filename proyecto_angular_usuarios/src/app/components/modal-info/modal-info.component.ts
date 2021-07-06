import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Test } from 'src/app/models/Test';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.scss'],
})
export class ModalInfoComponent implements OnInit {
  formulario: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  InsertStatus: boolean = false;
  datos: Test = {
    test_id: this.data.test_id,
    test_edad: this.data.test_edad,
    test_email: this.data.test_email,
    test_name: this.data.test_name,
    test_est: this.data.test_est,
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Test,
    private fb: FormBuilder,
    private matDialog: MatDialog,
    private dataService: DataService
  ) {
    this.formulario = this.fb.group(this.datos);
    this.formulario.controls['test_id'].disable();
    this.InsertStatus = data.test_id ? true : false;
  }

  ngOnInit(): void {
    console.log('Recibe', this.datos);
  }

  cerrarModal() {
    this.matDialog.closeAll();
  }

  procesarData(data: Test | any) {
    data.test_id = this.datos.test_id;
    console.log(data);
    console.log('UPDATE', data);
    let text = 'Estas Seguro de realizar la actualización?';

    if (this.validaFormulario()) {
      this.alertConfirmacion(text).then((res) => {
        console.log(res);
        console.log('paso');
        this.dataService
          .updateTest(data.test_id, data)
          .subscribe((res: any) => {
            if (res.STATUS == 'OK') {
              this.alertSuccess();
            }
          });
      });
    } else {
      this.alertInform();
    }
  }

  eliminarRegistro() {
    let text = 'Estas Seguro de Eliminar el Registro?';

    if (this.validaFormulario()) {
      this.alertConfirmacion(text).then((data) => {
        console.log(data);
        console.log('paso');
        this.dataService
          .deleteTest(this.datos.test_id)
          .subscribe((res: any) => {
            if (res.STATUS == 'OK') {
              this.alertSuccess();
            }
          });
      });
    } else {
      this.alertInform();
    }
  }

  alertConfirmacion(text: string) {
    let ok = false;
    let promesa = new Promise((resolve, reject) => {
      Swal.fire({
        title: text,
        text: 'Una ves realizado no hay vuelta atras!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si Aplicar',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          ok = true;
          resolve(ok);
        } else {
          reject(ok);
        }
      });
    });

    return promesa;
  }

  alertSuccess() {
    Swal.fire({
      position: 'top-end',
      title: 'Acción Realizada Satisfactoriamente!',
      text: 'La transacción se Realizo correctamente ',
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
    });
    this.cerrarModal();
  }

  alertInform() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'warning',
      title: 'Porfavor completa el formulario correctamente!',
    });
  }

  registroUserNew() {
    if (this.validaFormulario()) {
      this.dataService.insertTest(this.datos).subscribe((res: any) => {
        if (res.SUCCESS == 'OK') {
          this.alertSuccess();
        }
      });
    } else {
      this.alertInform();
    }
  }

  validaFormulario() {
    return this.formulario.status == 'VALID';
  }
}
