import { Injectable } from '@angular/core';

@Injectable()
export class loginService {
  getSession() {
    return localStorage.getItem('login') == 'true' &&
      localStorage.getItem('login') != null
      ? true
      : false;
  }

  setSession(estado: boolean) {
    localStorage.setItem('login', String(estado));
  }
}
