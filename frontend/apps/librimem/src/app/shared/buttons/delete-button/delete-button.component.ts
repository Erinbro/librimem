import { Component, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { BaseButtonComponent } from '../base-button.component';

@Component({
  selector: 'librimem-delete-button',
  templateUrl: "../base-button.component.html",
  styles: [`
  .lm-delete-button {
    width: 100%;
    min-width: 1rem;
    height: 100%;
    min-height: 1rem;
  }
  .lm-delete-button img {
    width: 0.25rem !important;
    height: auto;
  }
  .lm-delete-button:hover {
    cursor: pointer;
    background-color: white;
  }
  `],
  styleUrls: ["../base-button.component.scss"]
})
export class DeleteButtonComponent extends BaseButtonComponent {

  @Input() override classes = ["lm-delete-button"]
  override color = "red";


  constructor() {
    super()
  }



}
