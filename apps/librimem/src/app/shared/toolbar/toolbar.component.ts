import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'librimem-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  inRow1 = false
  showRow2 = false
  constructor() { }

  ngOnInit(): void { }




  openRow2() {

  }

  closeRow2() {

  }
}
