import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'librimem-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {

  links = {
    collections: { url: '/collections', title: 'Collections' },
    books: {
      url: '/books',
      title: 'Books'
    },
    chapters: {
      url: '/chapters',
      title: 'Chapters'
    },
    blogs: {
      url: '/blogs',
      title: 'Blogs'
    },
    newspapers: {
      url: '/newspapers',
      title: 'Newspapers'
    }
  }

  entityLinks = {
    notes: {
      url: '/entity/notes'
    },
    flashcards: {
      url: '/entity/flashcards'
    },
    words: {
      url: '/entity/words'
    }
  }

  // links = ['/books']

  // TODO Implement in store
  // Depending whether an entity has been selected we show a different sidenav content
  entitySelected = false;

  opened = false;
  constructor() { }

  ngOnInit(): void { }

  openSidenav() {
    this.opened = !this.opened;
  }
}
