import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { map, reduce, tap} from "rxjs/operators";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

  constructor(private http: HttpClient) { }


  validateEmail(email: any) {
    console.log(email);
      if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
 .test(email?.value))
  {
    return (true)
  }
    console.log("You have entered an invalid email address!")
    return (false)
}

  passwordMatchValidator(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors['passwordMismatch']
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
          return true;
      } else {
        confirmPasswordControl.setErrors(null);
          return null;
      }
    };
  }

  
  validateEmaileNotTaken(control: AbstractControl) {
    console.log(control.value);
    return this.checkEmailNotTaken(control.value).pipe(
      map(res => {
        console.log(res);
        return !res ? null : { emailTaken: true };
      })
    );
  }
  

  checkEmailNotTaken(email: string):Observable <boolean> {
    return this.http.get("http://localhost:3000/users").pipe(
      reduce((acc: any, users: any) => {
        users.forEach((el: any) => {
          console.log(el);
            if (el.email === email) {
          acc = true; 
          console.log(acc);
          }
      }) ;
        console.log('',email, users.email, acc);
        return acc ; 
      }, false)
      
     ); 


/*
validateEmaileNotTaken(control: AbstractControl) {
  console.log(control.value);
  return this.checkEmailNotTaken(control.value).pipe(
    map(res => {
      console.log(res);
      return !res ? null : { emailTaken: true };
    })
  );
}
     checkEmailNotTaken(email: string): any {
       let isValid = false;
       this.http.get("http://localhost:3000/users").pipe(
        map((el: any) => {
          console.log(el);
          if(el.email === email){
            isValid = true;
          }
          console.log(el.email);
        }
        )
      );
        return isValid;
      
          
       //   console.log(email, users.email, acc)
        
         
      }
      */
      
 }

 sendEmail(url: string, data: any){
  return this.http.post(url, data);
}
}

