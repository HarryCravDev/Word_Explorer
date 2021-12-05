import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('signupInfo') signupForm: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSignup(form: NgForm): any {
    const { email, password, confirmPassword } = form.value;
    
    // Check if passwords match
    if(password !== confirmPassword){
      this.signupForm.controls['confirmPassword'].setErrors({'incorrect': true});
      this.signupForm.controls['password'].setErrors({'incorrect': true});
      return false;
    }
  }

}
