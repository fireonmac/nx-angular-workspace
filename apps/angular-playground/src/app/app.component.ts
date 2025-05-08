import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  imports: [
    RouterModule,
    FormsModule,
  ],
  selector: 'app-root',
  template: `
    <button hlmBtn variant="outline">Button</button>
  `,
})
export class AppComponent {

}
