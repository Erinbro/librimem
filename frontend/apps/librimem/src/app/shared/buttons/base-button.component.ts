import { Component, Input, Output, OnInit, OnDestroy, OnChanges, SimpleChanges, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'librimem-base-button',
  templateUrl: "./base-button.component.html",
  styleUrls: ["./base-button.component.scss"],
  standalone: true,
  imports: [MatTooltipModule]
})
export abstract class BaseButtonComponent implements AfterViewInit {

  @ViewChild("baseButton")
  private baseButtonComponent!: ElementRef

  /**
   * The CSS classes that will be provided
   * to the button
   */
  @Input() classes: string[] | undefined

  /**
   * The text within the button
   */
  @Input() content: string | undefined

  @Input() disabled = false

  /**
   * The function that gets triggerd if the btn
   * is clicked
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  @Output() click = new EventEmitter();

  /**
   * Tooltip for the button
   */
  @Input() tooltip = ""

  @Input() selected = false


  /**
   * The color that is used by the button
   */
  @Input() color: string | undefined;

  public clicked(ev: Event) {
    ev.preventDefault()
    ev.stopPropagation()
    this.click.emit("button was clicked")
  }


  ngAfterViewInit(): void {
    // Add the classes to the native component
    if (this.classes) {
      this.classes.forEach((c) => {
        (this.baseButtonComponent.nativeElement as Element)
          .classList.add(c)
      })
    }
    // Change color
    if (this.color) {
      const compStyles = window.getComputedStyle(this.baseButtonComponent.nativeElement)
      this.baseButtonComponent.nativeElement.style.setProperty("--color", this.color)
    }
  }

}
