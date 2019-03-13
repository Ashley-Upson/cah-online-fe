import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from "./index/index.component";
import {Error404Component} from "./error404/error404.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {ForgotComponent} from "./auth/forgot/forgot.component";
import {ResetComponent} from "./auth/reset/reset.component";
import {InviteComponent} from "./game/invite/invite.component";
import {PlayComponent} from "./game/play/play.component";

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'auth', children:
    [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgot', component: ForgotComponent },
      { path: 'reset', component: ResetComponent }
    ]
  },
  { path: 'game', children:
    [
      { path: '', pathMatch: 'full', redirectTo: 'play' },
      { path: 'invite', component: InviteComponent },
      { path: 'play', component: PlayComponent }
    ]
  },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
