import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidationService } from 'src/app/services/custom-validation.service';
//import { RegisterValidators } from '../validators/register-validators';
import {EmailService} from '../../services/email.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('userFrom') 
  public createUserForm: NgForm | undefined;

  public signupForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, 
    private http : HttpClient, 
    private router: Router,
    private customValidator: CustomValidationService,
    private emailService:EmailService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name:[""],
      email:["", this.customValidator.validateEmail.bind(this.customValidator),this.customValidator.validateEmaileNotTaken.bind(this.customValidator) ,[Validators.required]],  //,this.customValidator.validateEmaileNotTaken.bind(this.customValidator)
      password:[""],
      confirmPassword:['']
     // position:[""]  [RegisterValidators.match],
    }, 
      {
        validator: this.customValidator.passwordMatchValidator(
          "password",
          "confirmPassword"
        )
      }
    )
  }
  signUp(){
    let email  = this.signupForm.value.email;
    let reqObj = {
      email:email
    }

    this.emailService.sendMessage(reqObj).subscribe(data=>{
      console.log(data);
    });
    this.http.post<any>("http://localhost:3000/users", this.signupForm.value)
    .subscribe(res=>{
      alert("Signup successful");
     
      this.signupForm.reset();
      this.router.navigate(['login']);
    }, err=>{
      alert('sth is wrong')
    })
  }
}
