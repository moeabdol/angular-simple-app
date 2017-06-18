import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent {
  navbarTitle = 'Simple Angular App';
}
