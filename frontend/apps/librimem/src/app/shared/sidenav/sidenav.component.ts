import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from './sidenav.service';
import { MatSidenav } from '@angular/material/sidenav';
import { LINKS } from '../../constants';
import { IStore, } from '../../state/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'librimem-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements AfterViewInit {
  links = LINKS

  @ViewChild('sidenav') public sidenav!: MatSidenav;

  constructor(private sidenavService: SidenavService, store: Store<IStore>) { }

  ngAfterViewInit(): void {
    console.log(`Sidenav : ${this.sidenav}`);
    this.sidenavService.setSidenav(this.sidenav)
  }
}
