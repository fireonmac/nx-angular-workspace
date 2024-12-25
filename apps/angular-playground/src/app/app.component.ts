import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  imports: [RouterModule, HlmButtonDirective],
  selector: 'app-root',
  template: `
    <button hlmBtn variant="outline">Button</button>
  `,
})
export class AppComponent {
  title = 'angular-playground';
}
