import { Injectable } from '@angular/core';
import { CanActivate, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot, 
  Router} from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private service:BasicAuthenticationService,private router:Router) { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
      if(this.service.isLoggedIn()){
        return true;
      }
      this.router.navigate([""])
      return false;
  }
}
