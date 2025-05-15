import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard {
  constructor(private _router: Router) { }

  canActivate(): boolean {
    const isAuthenticated = false; 
    if (!isAuthenticated) {
      alert('Not authenticated. Redirecting to home page.');
      this._router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
