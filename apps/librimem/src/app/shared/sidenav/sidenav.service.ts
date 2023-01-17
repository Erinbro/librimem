import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
@Injectable({
  providedIn: "root"
})
export class SidenavService {
  private sidenav!: MatSidenav

  public setSidenav(sidenav: MatSidenav) {
    console.log(`In service: ${sidenav}`)
    this.sidenav = sidenav
  }

  public open() {
    return this.sidenav.open();
  }

  public close() {
    return this.sidenav.close()
  }

  public toggle() {
    return this.sidenav.toggle()
  }
}
