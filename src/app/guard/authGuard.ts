import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../authentication/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const url: string = state.url;
    console.log('AuthGuard');
    return this.checkLogin();
  }

  checkLogin() {
    console.log(this.authService.user);
    if (this.authService.token) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
