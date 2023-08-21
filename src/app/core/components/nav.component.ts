import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../model/User';

@Component({
  selector: 'app-nav',
  template: `
  <nav class="menu"  *ngIf="isLoggedIn$ | async as isLoggedIn ">
    <p class="menu-label">Menu</p>
    <ul class="menu-list" >
      <a routerLink="/admin-user" routerLinkActive="router-link-active">
        <span>Gestionar Usuarios</span>
      </a>
      <a routerLink="/table-user" routerLinkActive="router-link-active">
        <span>Tablero de Usuarios</span>
      </a>
      <button type="submit" style="text-transform: uppercase;
  letter-spacing: 0.15em;
  border: none;
  font-size: 0.875rem;
  color: #ffffff;
  font-weight: bold;
  background-color: #bee9c6;
  width: 100%;
  display: block;
  padding: 0.875rem 1rem;
  border-radius: 1.5rem;
  box-shadow: 3px 3px 8px #b1b1b1, -3px -3px 8px #ffffff;
  cursor: pointer;" (click)="onLogout()">Cerrar Sesión</button>
    </ul>
  </nav>
  `
})

export class NavComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  user: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  onLogout() {
    this.authService.logout();
  }
}
