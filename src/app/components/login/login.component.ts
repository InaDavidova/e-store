import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {ApiService} from '../../shared/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading = false;

  myform!: any;

  public loginForm!: FormGroup
  constructor(
    private formBuilder : FormBuilder, 
    private http : HttpClient, 
    private router: Router, 
    private api: ApiService) { }

  ngOnInit(): void {


    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });

  

  

  }
  
  
  login(){
    this.isLoading = true;
    this.http.get<any>('http://localhost:3000/users')
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
       
      });
     
   
      if (user) {
       this.isLoading = false;

        const userData = {
          email: user.email,
          position: user.position
        }
        
        localStorage.setItem("loginForm",JSON.stringify(userData));

        this.loginForm.reset();
        this.router.navigate(['home']);
      
       
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

