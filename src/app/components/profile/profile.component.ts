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
  constructor(private formbuilder: FormBuilder,
    private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      name : [''],
      email : [''],
      password : ['']

    })
    this.getAllData();
  }

 getAllData(){
    this.api.getProfile()
    .subscribe(res=>{
      this.profileData = res;
    })
  }

  onEdit(row: any){
    this.profileModelObj.id = row.id;
    this.formValue.controls['name'].setValue(row.name);
    this.formValue.controls['emil'].setValue(row.email);
    this.formValue.controls['password'].setValue(row.password);
  }

  updateProfileDetails(){
    this.profileModelObj.name = this.formValue.value.name;
    this.profileModelObj.email = this.formValue.value.email;
    this.profileModelObj.password = this.formValue.value.password;
    this.api.updateProfile(this.profileModelObj, this.profileModelObj.id)
    .subscribe(res=>{
      alert('updated');
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
    })
  }
}
