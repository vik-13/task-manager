import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import {AngularFire} from "angularfire2";

@Injectable()
export class InternalZoneActivateService implements CanActivate{
  constructor(private af: AngularFire, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let isAuthorized: Observable<boolean>;

    isAuthorized = new Observable((observer) => {
      this.af.auth.subscribe((auth) => {
        if (!auth) {
          this.router.navigate(['/sign-in']);
        }
        observer.next(!!auth);
      });
    });

    return isAuthorized;
  }
}
