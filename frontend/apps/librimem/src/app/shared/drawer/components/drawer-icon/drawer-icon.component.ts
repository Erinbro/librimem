import { Component, Input } from '@angular/core';

@Component({
  selector: 'librimem-drawer-icon',
  templateUrl: './drawer-icon.component.html',
  styleUrls: ['./drawer-icon.component.scss'],
})
export class DrawerIconComponent {
  @Input() icon: any;

}
