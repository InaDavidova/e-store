import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading = false;

  public loginForm!: FormGroup
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[""],
      password:[""]
    })
  }
  login(){
    this.isLoading = true;
    this.http.get<any>('http://localhost:3000/users')
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
       
      });
     
    //  if(user.id == 1 || user.id == 2 || user.id == 3){
      //.position === "admin")
      if (user) {

       this.isLoading = false;
        alert('login success');
        this.loginForm.reset();
        this.router.navigate(['profile'])
      } else{
        this.isLoading = false;
        alert('user not found');
      }
    }, err=>{
      this.isLoading = false;
      alert('sth is wrong');
    })
  }
}
