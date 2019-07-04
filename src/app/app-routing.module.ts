import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { TodosComponent } from './todos/todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './services/route-guard.service';
import { TodoComponent } from './todo/todo.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user/:username',component:WelcomeComponent,canActivate:[RouteGuardService]},
  {path:'user/:username/todos', component:TodosComponent,canActivate:[RouteGuardService]},
  {path:'logout', component:LogoutComponent,canActivate:[RouteGuardService]},
  {path:'user/:username/todo',component:TodoComponent,canActivate:[RouteGuardService]},
  {path:'user/:username/todo/:id',component:TodoComponent,canActivate:[RouteGuardService]},
  {path:'**',component:ErrorComponent,canActivate:[RouteGuardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
