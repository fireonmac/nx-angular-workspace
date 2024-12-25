import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmRadioIndicatorComponent, HlmRadioDirective, HlmRadioGroupDirective, } from '@spartan-ng/ui-radiogroup-helm';
import { BrnRadioComponent, BrnRadioGroupComponent } from '@spartan-ng/brain/radio-group';

@Component({
  imports: [
    RouterModule,
    HlmButtonDirective,
    FormsModule,
    BrnRadioGroupComponent,
    BrnRadioComponent,
    HlmRadioIndicatorComponent,
    HlmRadioDirective,
    HlmRadioGroupDirective,
  ],
  selector: 'app-root',
  template: `
    <button hlmBtn variant="outline">Button</button>

    <brn-radio-group
      class="mb-4 font-mono text-sm font-medium space-y-1"
      hlm
      [(ngModel)]="version"
    >
      <brn-radio hlm value="16.1.4">
        <hlm-radio-indicator indicator />
        v16.1.4
      </brn-radio>
      <brn-radio hlm value="16.0.0">
        <hlm-radio-indicator indicator />
        v16.0.0
      </brn-radio>
      <brn-radio hlm value="15.8.0">
        <hlm-radio-indicator indicator />
        v15.8.0
      </brn-radio>
      <brn-radio disabled hlm value="15.2.0">
        <hlm-radio-indicator indicator />
        v15.2.0
      </brn-radio>
    </brn-radio-group>
  `,
})
export class AppComponent {
  title = 'angular-playground';

  version = '';
}
