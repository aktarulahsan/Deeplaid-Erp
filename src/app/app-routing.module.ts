import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeeplaidComponent } from './deeplaid/deeplaid.component';
import { HomePageComponent } from './deeplaid/home-page/home-page.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: 'login',
        component: LoginPageComponent,
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    component: DeeplaidComponent,
    children: [
      {
        path: 'home',
        component: HomePageComponent,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginPageComponent, HomePageComponent];