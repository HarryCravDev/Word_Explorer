import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { EnterWordScreenComponent } from './word/enter-word-screen/enter-word-screen.component';
import { SearchWordComponent } from './word/search-word/search-word.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "words", component: EnterWordScreenComponent },
  { path: "words/search", component: SearchWordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
