import { Component, Input } from '@angular/core';
import { BaseButtonComponent } from '../base-button.component';

@Component({
  selector: 'librimem-secondary-button',
  templateUrl: '../base-button.component.html',
  styleUrls: ['../base-button.component.scss'],
})
export class SecondaryButtonComponent extends BaseButtonComponent {
  override color = "blue"

  @Input() override classes = ["lm-secondary-button"]

  constructor() {
    super()
  }
}
