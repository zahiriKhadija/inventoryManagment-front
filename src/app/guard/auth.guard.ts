import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot,Router } from '@angular/router';




export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const token = localStorage.getItem('token');
  const router = inject(Router);
  if(token){
  return true;
  }
  else {
    router.navigate(['/login']);
     return false;
  }
};
