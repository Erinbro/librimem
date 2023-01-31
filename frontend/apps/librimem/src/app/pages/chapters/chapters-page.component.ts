import { Component, OnInit } from '@angular/core';
import { IChapter } from '@librimem/api-interfaces';


/**
 * Page that shows the chapters of a book
 */
@Component({
  selector: 'librimem-chapters-page',
  templateUrl: './chapters-page.component.html',
  styleUrls: ['./chapters-page.component.scss'],
})
export class ChaptersPageComponent implements OnInit {




  constructor() { }

  ngOnInit(): void { }
}
