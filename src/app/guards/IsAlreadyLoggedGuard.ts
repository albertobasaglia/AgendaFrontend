import {ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../services/api.service';

@Injectable()
export class IsAlreadyLoggedGuard implements CanActivateChild {
  constructor(private api: ApiService, private router: Router) {
  }
  // tslint:disable-next-line:max-line-length
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.api.isLogged()) {
      this.router.navigate(['/logged']);
      return false;
    } else {
      return true;
    }
  }

}
