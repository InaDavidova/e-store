import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { SignupComponent } from "./signup.component";
import { Injectable } from "@angular/core";


@Injectable()
export class CreateUserCanDeactivateGuardService implements CanDeactivate<SignupComponent>{
    canDeactivate(component: SignupComponent): boolean  {
        if(component.createUserForm?.dirty){
            return confirm('Do you realy want to discard your changes ');
        }
        return true;
    }
}