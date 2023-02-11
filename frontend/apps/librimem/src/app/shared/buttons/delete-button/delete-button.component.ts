import { Component } from '@angular/core';
import { BaseButtonComponent } from '../base-button.component';

@Component({
  selector: 'librimem-delete-button',
  template: `
  <button type="button" class="lm-delete-button">
    <img src="assets/icons/delete.png" alt="delete" />
  </button>
  `,
  styles: [`
  .lm-delete-button {
    width: 100%;
    min-width: 1rem;
    max-width: fit-content;
    height: fit-content !important;
    min-height: 1rem;
    padding: none !important;
    margin: none !important;
    background-color: red;
  }


  .lm-delete-button img {
    width: 0.5rem;
    height: 0.5rem;
  }
  .lm-delete-button:hover {
    cursor: pointer;
    background-color: white;
  }
  `],
  styleUrls: ["../base-button.component.scss"]
})
export class DeleteButtonComponent extends BaseButtonComponent {

  override color = "red";
  override content = "assets/icons/delete.png'"
  constructor() {
    super()
  }


}
