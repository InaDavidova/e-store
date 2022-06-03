import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {ApiService} from '../../shared/api.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading = false;

  myform!: any;

  public loginForm!: FormGroup
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router: Router, private api: ApiService) { }

  ngOnInit(): void {

 //  localStorage.setItem("id", "num");

 //  this.loginForm = this.formBuilder.group({
   //   email:[""],
  //    password:[""]
  //  })

    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });

  

  }
/*
  login(){
    this.api.login();
    }
  }
  */
  
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
        localStorage.setItem("loginForm",JSON.stringify(this.loginForm.value.email));
        this.loginForm.reset();
          if (user.position === "admin") {
            this.router.navigate(['profile']);
        } else {
          this.router.navigate(['home']);
        }
       
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

