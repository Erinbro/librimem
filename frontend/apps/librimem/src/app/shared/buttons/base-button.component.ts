import { Component, Input, Output, OnInit, OnDestroy, OnChanges, SimpleChanges, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'librimem-base-button',
  templateUrl: "./base-button.component.html",
  styleUrls: ["./base-button.component.scss"]
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
   * The color that is used by the button
   */
  @Input() color: string | undefined;

  public clicked() {
    this.click.emit("button was clicked")
  }


  ngAfterViewInit(): void {
    if (!this.classes) return;
    // Add the classes to the native component
    this.classes.forEach((c) => {
      (this.baseButtonComponent.nativeElement as Element)
        .classList.add(c)
    })
    const compStyles = window.getComputedStyle(this.baseButtonComponent.nativeElement)
    this.baseButtonComponent.nativeElement.style.setProperty("--color", this.color)
    console.log(

      compStyles.getPropertyValue("--color")
    );

  }


}
