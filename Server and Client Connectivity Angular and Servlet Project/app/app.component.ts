import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- <pro-list></pro-list> -->
  <div style="text-align:center">
  <h3>
    Welcome to {{title}}!
  </h3>
   <ul class="navbar-nav">
    <li><a [routerLink]="['/add-prod']">ADD</a></li>
    <li><a [routerLink]="['/pro-list']">LIST</a></li>
  </ul>
   <div class='container'>
    <router-outlet></router-outlet>
   </div>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'angularApp2';
}
