import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  async login(form: { email: string, password: string }) : Promise<Observable<any>> {

      const res = await this.http.post('http://localhost:3000/auth/login', form);

      console.log("Response: ", res);
      return res;
  }

  async signup(form: { email: string, password: string, confirmPassword: string }) : Promise<Observable<any>> {

    console.log("Service: ", form);

      const res = await this.http.post('http://localhost:3000/auth/signup', form);

      console.log("Response: ", res);
      return res;
  }
}
