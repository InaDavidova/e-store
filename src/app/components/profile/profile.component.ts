import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { ProfileModel} from './profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  
})
export class ProfileComponent implements OnInit {

  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }

  formValue !: FormGroup;
  profileModelObj : ProfileModel = new ProfileModel();
  profileData !: any;
  showAdd! : boolean;
  showUpdate! : boolean;
  constructor(private formbuilder: FormBuilder,
    private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      name : [''],
      email : [''],
      password : [''],
      position : ['']
    })
    this.getAllData();
  }

    clickAddUser(){
      this.formValue.reset();
      this.showAdd = true;
      this.showUpdate = false;
    }

  postProfileDetails(){
    this.profileModelObj.name = this.formValue.value.name;
    this.profileModelObj.email = this.formValue.value.email;
    this.profileModelObj.password = this.formValue.value.password;
    this.profileModelObj.position = this.formValue.value.position;
    this.api.postProfile(this.profileModelObj)
    .subscribe(res=>{
      console.log(res)
      alert("Added new user");
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAllData();
    },
    err=>{
      alert('sth is wrong')
    }
    )
  }

 getAllData(){
    this.api.getProfile()
    .subscribe(res=>{
      this.profileData = res;
    })
  }

  deleteProfileDetails(row: any){
    this.api.deleteProfile(row.id)
    .subscribe(res=>{
      alert("Deleted User");
      this.getAllData();
    },
    err=>{
      alert('sth is wrong')
    })
  }

  onEdit(row: any){
    this.showAdd = false;
    this.showUpdate = true;
    this.profileModelObj.id = row.id;
    this.formValue.controls['name'].setValue(row.name);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['password'].setValue(row.password);
    this.formValue.controls['position'].setValue(row.position);
  }

  updateProfileDetails(){
    this.profileModelObj.name = this.formValue.value.name;
    this.profileModelObj.email = this.formValue.value.email;
    this.profileModelObj.password = this.formValue.value.password;
    this.profileModelObj.position = this.formValue.value.position;
    this.api.updateProfile(this.profileModelObj, this.profileModelObj.id)
    .subscribe(res=>{
      alert('updated');
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllData();
    },
    err=>{
      alert('sth is wrong')
    })
  }
}
