import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class AdminGuardService implements CanActivate {

  constructor(public router: Router, public api: ApiService) { }

  canActivate(): boolean {

    if(!this.api.isAdmin()) {
      this.router.navigate(['login']);
      return false;
    }
    
    return true;
  }
}
