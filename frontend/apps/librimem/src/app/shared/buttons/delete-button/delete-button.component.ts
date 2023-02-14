import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
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
    background-color: red !important;
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
export class DeleteButtonComponent extends BaseButtonComponent implements AfterViewInit {

  @ViewChild("deleteBtn")
  private DeleteButton!: ElementRef

  override classes = ["lm-delete-button"]
  override color = "red";

  constructor() {
    super()
  }

  override ngAfterViewInit(): void {

  }


}
