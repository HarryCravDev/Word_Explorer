import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('signupInfo') signupForm: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  async onSignup(form: NgForm): Promise<any> {
    const { email, password, confirmPassword } = form.value;
    
    // Check if passwords match
    if(password !== confirmPassword){
      this.signupForm.controls['confirmPassword'].setErrors({'incorrect': true});
      this.signupForm.controls['password'].setErrors({'incorrect': true});
      return false;
    }

    const user = await this.authService.signup(form.value);

    user.subscribe(user => {
      console.log("User Subscribe...: ", user);
    });


  }

}
