import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterState, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }
  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    }
    this.authService.redirectURL = url;
    this.router.navigate(['/login']);
    return false;
    // this.authService.login().subscribe(() => {
    //   if (this.authService.isLoggedIn) {
    //     console.log(this.authService.isLoggedIn);
    //     return true;
    //   }
    // });
    // return true;
  }
}
