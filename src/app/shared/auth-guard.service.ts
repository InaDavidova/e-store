import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(public router: Router, public api: ApiService) { }

  canActivate(): boolean {

    if(!this.api.isUser()) {
      this.router.navigate(['login']);
      return false;
    }
    
    return true;
  }
}
