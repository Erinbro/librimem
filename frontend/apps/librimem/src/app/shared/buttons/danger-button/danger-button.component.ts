import { Component, Input } from '@angular/core';
import { BaseButtonComponent } from '../base-button.component';

@Component({
  selector: 'librimem-danger-button',
  templateUrl: '../base-button.component.html',
  styleUrls: ["../base-button.component.scss"]
})
export class DangerButtonComponent extends BaseButtonComponent {
  override color = "red"

  @Input() override classes = ["lm-danger-button"]

  constructor() {
    super()
  }
}
