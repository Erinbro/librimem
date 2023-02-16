import { Component } from '@angular/core';
import { BaseButtonComponent } from '../base-button.component';

@Component({
  selector: 'librimem-close-button',
  templateUrl: "../base-button.component.html",
  styles: [`
  .librimem-close-button{
    background-color: red;
    width: 30px;
    height: 30px;
    color: white;
    font-size: 24px;
    padding: 0.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .librimem-close-button:hover {
    cursor: pointer;
    background-color: white;
    color: red;
  }
  `]
})
export class CloseButtonComponent extends BaseButtonComponent {
  override classes = ["librimem-close-button"]
  override content = "x"

}
