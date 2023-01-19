import { Component, OnInit, Output } from '@angular/core';
import { SidenavService } from '../sidenav/sidenav.service';
import { LINKS } from '../../constants/links';
import { Store } from '@ngrx/store';
import { selectSelectedBook } from '../../state/book/book.selector';
import { IStore } from '../../state/store';

@Component({
  selector: 'librimem-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  links = LINKS
  constructor(private sidenav: SidenavService, private store: Store<IStore>) { }

  /**
   * Decides if we open the sidenav.
   * We use it under the breakpoint 576px.
   */
  sidenavOpened = false
  /**
   * Decides if the user has selected a book.
   * If no book is selected then we do not show certain links
   */
  hasSelectedBook = false

  ngOnInit(): void {
    this.removeInactiveRoutes()
  }

  openSidenav() {
    // if (this.sidenavOpened) this.sidenav.close()
    // else this.sidenav.open()
    this.sidenav.toggle()
    this.sidenavOpened = !this.sidenavOpened
  }

  /**
   * Removes routes that are not yet activated
   */
  removeInactiveRoutes() {
    this.store.select(selectSelectedBook).subscribe((book) => {
      if (book) this.hasSelectedBook = true
    })
    console.log(`[ToolbarComponent.removeInactiveRoutes] hasSelectedBook: ${this.hasSelectedBook}`);

  }

}
