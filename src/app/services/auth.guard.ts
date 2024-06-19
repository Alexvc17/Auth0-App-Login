  import { Injectable } from '@angular/core';
  import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
  import { AuthService } from '@auth0/auth0-angular';
  import { Observable } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class CanActivateGuard implements CanActivate {
    constructor(private auth: AuthService){

    }
//este guard es usado para que la ruta pase por el guardian antes de que se muestre y esta funcion la llamo en la ruta
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean> {
      return this.auth.isAuthenticated$;
    }
  }
