import { Component } from '@angular/core';
import { BaseButtonComponent } from '../base-button.component';

@Component({
  selector: 'librimem-add-button',
  templateUrl: "../base-button.component.html",
  styleUrls: ['../base-button.component.scss'],
  styles: [`
  .lm-add-button {
    padding: 1rem;
    font-size: 20px;
  }
  `]
})
export class AddButtonComponent extends BaseButtonComponent {
  override color = "blue"
  override content = "+"
  override classes = ["lm-add-button"];

  constructor() {
    super();
  }
}
