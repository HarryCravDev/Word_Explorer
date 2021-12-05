import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginInfo') form: any;

  incorrectLogin: boolean = false;

  constructor(
    private authService: AuthService,
    private route: Router
  ) {}

  ngOnInit(): void {
  }

  async onLogin(form: NgForm){
    const data = await this.authService.login(form.value);

    console.log("Data: ", data);

    data.subscribe(
      res => {
        if(res.success){
          this.route.navigate(['/words']);
        }
      },
      () => {
      this.loginError();
    });

  }

  loginError() {
    console.log("Form: ", this.form);

    this.incorrectLogin = true;
    this.form.controls['email'].setErrors({'incorrect': true});
    this.form.controls['password'].setErrors({'incorrect': true});
    
    setTimeout(() => {
      this.incorrectLogin = false;
      this.form.controls['email'].setErrors(null);
      this.form.controls['password'].setErrors(null);
      
    }, 3500);
  }

}
