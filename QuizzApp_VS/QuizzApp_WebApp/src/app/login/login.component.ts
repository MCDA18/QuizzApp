import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/compat/auth';
// import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    firebaseErrorMessage: string;
    // private authService: AuthService,
    constructor( private router: Router) {
        this.loginForm = new FormGroup({
            'email': new FormControl('', [Validators.required, Validators.email]),
            'password': new FormControl('', Validators.required)
        });

        this.firebaseErrorMessage = '';
    }

    ngOnInit(): void {
        
    }

    loginUser() {
        if (this.loginForm.invalid)
            return;

        // this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password);
    }
    openSignUpPage()
    {
        this.router.navigate(['signup'])
    }
}

