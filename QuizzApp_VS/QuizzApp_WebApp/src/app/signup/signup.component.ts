import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userRegForm!: FormGroup;
  firebaseErrorMessage!: string;
  // private authService:AuthService
  constructor() {
    this.firebaseErrorMessage='';
   }

  ngOnInit(): void {
    this.userRegForm=new FormGroup({
      'displayName':new FormControl('',Validators.required),
      'email':new FormControl('',Validators.required),
      'password':new FormControl('',Validators.required)
    });
    // this.authService.eventAuthError$.subscribe(data=>{
    //   this.firebaseErrorMessage=data;
    // })
  }
  signUp(){
    if(this.userRegForm.invalid)
        return;
      // this.authService.signUpUser(this.userRegForm.value);

}

}
