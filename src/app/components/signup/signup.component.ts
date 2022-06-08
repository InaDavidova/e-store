import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidationService } from 'src/app/services/custom-validation.service';
//import { RegisterValidators } from '../validators/register-validators';
//import {EmailService} from '../../services/email.service';
//import { ApiService} from '../../shared/api.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  loading = false;
  buttionText = "Submit";

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  @ViewChild('userFrom') 
  public createUserForm: NgForm | undefined;

  public signupForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, 
    private http : HttpClient, 
    private router: Router,
    private customValidator: CustomValidationService,
  ) { }  // private emailService:EmailService

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name:["", [Validators.minLength(3), Validators.required]],
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
    
    this.loading = true;
    this.buttionText = "Submiting...";
    let user = {
      email: this.emailFormControl.value
    }
    this.customValidator.sendEmail("http://localhost:4000/sendmail", user).subscribe(
      (data: any) => {
        let res:any = data; 
        console.log(
          `is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
      },
      (err: any) => {
        console.log(err);
        this.loading = false;
        this.buttionText = "Submit";
      },() => {
        this.loading = false;
        this.buttionText = "Submit";
      }
    );

    this.http.post<any>("http://localhost:3000/users", this.signupForm.value)
    .subscribe(res=>{
    //  alert("Signup successful");
     
      this.signupForm.reset();
      this.router.navigate(['login']);
    }, err=>{
      alert('sth is wrong')
    })
  }
}
