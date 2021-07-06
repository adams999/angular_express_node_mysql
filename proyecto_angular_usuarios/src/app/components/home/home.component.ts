import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Test } from 'src/app/models/Test';
import { MatDialog } from '@angular/material/dialog';
import { ModalInfoComponent } from '../modal-info/modal-info.component';
import { loginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  datos: Test[] | any;
  datAux: Test[] | any;
  displayedColumns: string[] = ['Id', 'Nombre', 'Correo', 'Edad', 'Accion'];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  expandedElement: Test[] | any;
  ordenElements: any = {
    test_id: true,
    test_name: true,
    test_edad: true,
    test_email: true,
  };
  txtSearch: string = '';
  search: boolean = false;
  dataPie: [] = [];
  dataBar: [] = [];
  session: boolean = false;
  promEdad: number = 0;

  constructor(
    private DataServices: DataService,
    private dialog: MatDialog,
    private loginS: loginService
  ) {}

  ngOnInit(): void {
    this.getAll();
    this.session = this.loginS.getSession();
  }

  aplicaPagina() {
    this.datos.paginator = this.paginator;
    this.datos.sort = this.sort;
  }

  applicaFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datos.filter = filterValue.trim().toLowerCase();

    if (this.datos.paginator) {
      this.datos.paginator.firstPage();
    }
  }

  getAll() {
    this.DataServices.getAll(
      this.search == true ? this.txtSearch : ''
    ).subscribe((data: any) => {
      this.datos = new MatTableDataSource(<Test[]>data);
      this.datAux = data;
      this.promedioEdad();
      this.aplicaPagina();
      return data;
    });
    this.dataPieChart();
    this.dataBarChar();
  }

  mostrarModal(elemento: Test) {
    const dialogRef = this.dialog.open(ModalInfoComponent, { data: elemento });

    dialogRef.afterClosed().subscribe((result) => {
      this.getAll();
    });
  }

  registrarUsuario() {
    const dialogRef = this.dialog.open(ModalInfoComponent, {
      data: 'registro',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getAll();
    });
  }

  ordenar(param: any) {
    if (this.ordenElements[param] == true) {
      this.ordenElements[param] = false;
      this.ordenaObject(this.datAux, param, false);
    } else {
      this.ordenElements[param] = true;
      this.ordenaObject(this.datAux, param, true);
    }
    this.datos = new MatTableDataSource(<Test[]>this.datAux);
    this.aplicaPagina();
  }

  ordenaObject(objeto: [], param: string, asc: boolean) {
    if (asc) {
      objeto.sort((a: any, b: any) => {
        if (!isNaN(a[param])) {
          return +b[param] - +a[param];
        } else {
          return String(b[param])
            .toLowerCase()
            .localeCompare(String(a[param]).toLowerCase());
        }
      });
    } else {
      objeto.sort((a: any, b: any) => {
        if (!isNaN(a[param])) {
          return +a[param] - +b[param];
        } else {
          return String(a[param])
            .toLowerCase()
            .localeCompare(String(b[param]).toLowerCase());
        }
      });
    }
    return objeto;
  }

  promedioEdad() {
    let acum = 0;
    let media = 0;
    for (const iterator of this.datAux) {
      acum += +iterator.test_edad;
    }
    media = acum / this.datAux.length;
    this.promEdad = media;
    return media;
  }

  buscar() {
    this.search = true;
    this.getAll();
  }

  formatearSearch() {
    this.txtSearch = '';
    this.search = false;
    this.getAll();
  }

  dataPieChart() {
    this.DataServices.getChartPie().subscribe((res: any) => {
      this.dataPie = res;
    });
  }

  dataBarChar() {
    this.DataServices.getChartBar().subscribe((res: any) => {
      this.dataBar = res;
    });
  }

  alertLogin() {
    let text = 'Porfavor habilita la opción para modificar!';
    this.alertInform(text);
  }

  alertInform(text: string) {
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
      title: text,
    });
  }

  drop(event: any) {
    moveItemInArray(this.datos, event.previousIndex, event.currentIndex);
  }
}
