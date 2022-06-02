import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {EmailService} from '../../services/email.service';


@Component({
  selector: 'app-nodemailer',
  templateUrl: './nodemailer.component.html',
  //styleUrls: ['./nodemailer.component.css']
})
export class NodemailerComponent implements OnInit {

  title = 'nodeMailerApp';
  signupForm!: FormGroup;

  constructor(private formBuilder:FormBuilder,private emailService:EmailService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email:[null,[Validators.required]]
   });
  }

  sendMail(){
    // alert("jjj");
     let email  = this.signupForm.value.email;
     let reqObj = {
       email:email
     }
     this.emailService.sendMessage(reqObj).subscribe(data=>{
       console.log(data);
     })
   }

}
