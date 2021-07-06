import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { loginService } from '../services/login.service';

@Injectable()
export class LoginGuardian implements CanActivate {
  constructor(private router: Router, private loginS: loginService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.loginS.getSession() == true) {
      console.log('aqui',this.loginS.getSession())
      return false;
    } else {
      this.router.navigate(['/']);
      return true;
    }
  }
}
