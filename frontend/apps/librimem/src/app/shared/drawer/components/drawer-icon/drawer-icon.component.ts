import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'librimem-drawer-icon',
  template: `
  <div class="drawer__icon" (click)="clicked()" id="icon.name" [matTooltip]="icon.name"
  matTooltipPosition="right"
  >
    <img src="{{ icon.src }}" alt="icon.name" />
  </div>
  `,
  styleUrls: ['./drawer-icon.component.scss'],
})
export class DrawerIconComponent {
  @Input() icon!: { path: string, src: string, name: string };

  constructor(private router: Router) { }

  /**
   * Navigate to the appropriate page
   * if clicking on an icon.
   */
  clicked() {
    console.log(`navigate tot ${this.icon.path.split("/")}`);
    this.router.navigate(this.icon.path.split("/"))
  }
}
