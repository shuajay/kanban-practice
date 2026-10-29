import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserLogin } from '../models/user';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);

  currentUserSignal = signal<User | null>(null);

  login(credentials: UserLogin){
    return this.http.post<User>(`/api/login`, credentials)
    .pipe(
      tap(user => {
        localStorage.setItem('user_session', JSON.stringify(user));
        this.currentUserSignal.set(user);
      })
    )
  }

  getToken(): string | null {
    const session = localStorage.getItem('user_session');
    if(!session) return null;

    const user: User = JSON.parse(session);
    return user.token;
  }

  isLoggedIn(){
    
  }

  logout(): void{
    localStorage.removeItem('user_session');
    this.currentUserSignal.set(null);
    this.router.navigate(['/login']);
  }

}
