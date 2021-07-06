import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.scss'],
})
export class CabeceroComponent implements OnInit {
  session: boolean = false;
  @Input() promedioEdad: [] | any;
  constructor(private route: Router, private loginS: loginService) {}

  ngOnInit(): void {
    this.session = this.loginS.getSession();
  }

  salir() {
    this.loginS.setSession(false);
    this.session = false;
    this.route.navigate(['/']);
    window.location.reload();
  }

  entrar() {
    this.loginS.setSession(true);
    this.session = true;
    this.route.navigate(['/']);
    window.location.reload();
  }
}
