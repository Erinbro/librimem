import { Component } from '@angular/core';
import { BaseButtonComponent } from '../base-button.component';

@Component({
  selector: 'librimem-close-button',
  template: `
  <button type="button">x</button>
  `,
  styles: [`
  button {
    background-color: red;
    color: white;
  }
  button:hover {

  }
  `]
})
export class CloseButtonComponent extends BaseButtonComponent {

}
