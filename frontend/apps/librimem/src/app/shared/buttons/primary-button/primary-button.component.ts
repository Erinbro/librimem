import { Component, Input } from '@angular/core';
import { BaseButtonComponent } from '../base-button.component';

@Component({
  selector: 'librimem-primary-button',
  templateUrl: "../base-button.component.html",
  styleUrls: ["../base-button.component.scss"],
  styles: [`

  `]
})
export class PrimaryButtonComponent extends BaseButtonComponent {
  override  color = "green"

  @Input() override classes = ["lm-primary-button"]

  constructor() {
    super()
  }

}
