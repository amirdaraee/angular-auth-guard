import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated : Subject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private router: Router) {
  }

  login(){
    this.isAuthenticated.next(true);
    this.router.navigate(['/dashboard']);
  }
}
