import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { AuthLoggedinGuard } from './auth-loggedin.guard';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([ 
      { path: 'auth', component: AuthComponent, canActivate: [AuthLoggedinGuard] },
    ]),
    SharedModule
  ]
})
export class AuthModule { }
