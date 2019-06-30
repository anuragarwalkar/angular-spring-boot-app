import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { TodosComponent } from './todos/todos.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'welcome/:name',component:WelcomeComponent},
  {path:'todos', component:TodosComponent},
  {path:'logout', component:LogoutComponent},
  {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
