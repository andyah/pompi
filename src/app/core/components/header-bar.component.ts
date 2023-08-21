import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header-bar',
  template: `
    <header>
      <nav
        class="navbar has-background-grey-dark is-dark"
        role="navigation"
        aria-label="main navigation"
      >
      <app-header-bar-brand></app-header-bar-brand>
      <app-header-bar-links></app-header-bar-links>
      </nav>
    </header>
  `
})
export class HeaderBarComponent {

}


