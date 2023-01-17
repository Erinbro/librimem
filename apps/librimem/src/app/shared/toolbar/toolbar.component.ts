import { Component, OnInit, Output } from '@angular/core';
import { SidenavService } from '../sidenav/sidenav.service';
import { LINKS } from '../../constants/links';

@Component({
  selector: 'librimem-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  links = LINKS
  constructor(private sidenav: SidenavService) { }

  /**
   * Decides if we open the sidenav.
   * We use it under the breakpoint 576px.
   */
  sidenavOpened = false

  ngOnInit(): void {
    console.log(`sidenav service: ${this.sidenav}`);
  }

  openSidenav() {
    // if (this.sidenavOpened) this.sidenav.close()
    // else this.sidenav.open()
    this.sidenav.toggle()
    this.sidenavOpened = !this.sidenavOpened
  }

}
