import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterValidators } from '../validators/register-validators';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('userFrom') 
  public createUserForm: NgForm | undefined;

  public signupForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name:[""],
      email:[""],
      password:[""],
      confirmPassword:['']
     // position:[""]
    }, [RegisterValidators.match])
  }
  signUp(){
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
