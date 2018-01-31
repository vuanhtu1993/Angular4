import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../authentication/auth.service';
import {ChattingComponent} from '../chatting/chatting.component';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const url: string = state.url;
    return this.checkLogin();
  }

  checkLogin() {
    if (this.authService.user) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}

export class ChattingGuard implements CanDeactivate<ChattingComponent> {
  canDeactivate(component: ChattingComponent,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    console.log('ChattingGuard');
    return component.canDeactive() || window.confirm('Some task is running. Do you want to get out ?');
  }

}
